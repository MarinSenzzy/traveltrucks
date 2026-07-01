import { FormType, EngineType } from '@/types/camper';

export const FormMap: Record<FormType, string> = {
  alcove: 'Alcove',
  panel_van: 'Panel Van',
  integrated: 'Integrated',
  semi_integrated: 'Semi Integrated',
};

export const EngineMap: Record<EngineType, string> = {
  diesel: 'Diesel',
  petrol: 'Petrol',
  hybrid: 'Hybrid',
  electric: 'Electric',
};
export const TransmissionMap: Record<string, string> = {
  automatic: 'Automatic',
  manual: 'Manual',
};
