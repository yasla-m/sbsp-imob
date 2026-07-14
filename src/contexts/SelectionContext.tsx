import React, { createContext, useContext, useState, useCallback, ReactNode, useMemo } from 'react';
import { Company, Property, companiesData } from '@/data/companies';

interface SelectionContextType {
  companies: Company[];
  selectedCompany: Company | null;
  selectedProperty: Property | null;
  portfolioMode: boolean;
  setSelectedCompany: (company: Company) => void;
  setSelectedProperty: (property: Property | null) => void;
  setPortfolioMode: (enabled: boolean) => void;
  toggleCompanyFavorite: (companyId: string) => void;
  togglePropertyFavorite: (companyId: string, propertyId: string) => void;
  getAllProperties: () => Property[];
  getPropertiesByCompany: (companyId: string) => Property[];
  getPropertyById: (propertyId: string) => Property | undefined;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

const extractAllProperties = (companies: Company[]): Property[] => {
  return companies.flatMap(company => company.properties);
};

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [companies, setCompanies] = useState<Company[]>(companiesData);
  const [selectedCompany, setSelectedCompanyState] = useState<Company | null>(companiesData[0]);
  const [selectedProperty, setSelectedPropertyState] = useState<Property | null>(null);
  const [portfolioMode, setPortfolioModeState] = useState<boolean>(true);

  const setSelectedCompany = useCallback((company: Company) => {
    setSelectedCompanyState(company);
    // Keep portfolio view as the default landing experience when switching companies
    setPortfolioModeState(true);
    setSelectedPropertyState(null);
  }, []);

  const setSelectedProperty = useCallback((property: Property | null) => {
    setSelectedPropertyState(property);
    setPortfolioModeState(property === null);
  }, []);

  const setPortfolioMode = useCallback((enabled: boolean) => {
    setPortfolioModeState(enabled);
    if (enabled) {
      setSelectedPropertyState(null);
    } else if (!selectedProperty && selectedCompany) {
      setSelectedPropertyState(selectedCompany.properties[0] || null);
    }
  }, [selectedProperty, selectedCompany]);

  const toggleCompanyFavorite = useCallback((companyId: string) => {
    setCompanies(prev =>
      prev.map(company =>
        company.id === companyId
          ? { ...company, isFavorite: !company.isFavorite }
          : company
      )
    );
    setSelectedCompanyState(prev =>
      prev?.id === companyId
        ? { ...prev, isFavorite: !prev.isFavorite }
        : prev
    );
  }, []);

  const togglePropertyFavorite = useCallback((companyId: string, propertyId: string) => {
    setCompanies(prev =>
      prev.map(company =>
        company.id === companyId
          ? {
              ...company,
              properties: company.properties.map(prop =>
                prop.id === propertyId
                  ? { ...prop, isFavorite: !prop.isFavorite }
                  : prop
              )
            }
          : company
      )
    );
    setSelectedCompanyState(prev =>
      prev?.id === companyId
        ? {
            ...prev,
            properties: prev.properties.map(prop =>
              prop.id === propertyId
                ? { ...prop, isFavorite: !prop.isFavorite }
                : prop
            )
          }
        : prev
    );
    setSelectedPropertyState(prev =>
      prev?.id === propertyId
        ? { ...prev, isFavorite: !prev.isFavorite }
        : prev
    );
  }, []);

  const getAllProperties = useCallback(() => {
    return extractAllProperties(companies);
  }, [companies]);

  const getPropertiesByCompany = useCallback((companyId: string) => {
    return companies.find(company => company.id === companyId)?.properties || [];
  }, [companies]);

  const getPropertyById = useCallback((propertyId: string) => {
    return extractAllProperties(companies).find(prop => prop.id === propertyId);
  }, [companies]);

  const value = useMemo(() => ({
    companies,
    selectedCompany,
    selectedProperty,
    portfolioMode,
    setSelectedCompany,
    setSelectedProperty,
    setPortfolioMode,
    toggleCompanyFavorite,
    togglePropertyFavorite,
    getAllProperties,
    getPropertiesByCompany,
    getPropertyById,
  }), [
    companies,
    selectedCompany,
    selectedProperty,
    portfolioMode,
    setSelectedCompany,
    setSelectedProperty,
    setPortfolioMode,
    toggleCompanyFavorite,
    togglePropertyFavorite,
    getAllProperties,
    getPropertiesByCompany,
    getPropertyById,
  ]);

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (context === undefined) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }
  return context;
}

// Backward-compatible hook aliases for gradual migration
export const useAddressSelection = useSelection;
