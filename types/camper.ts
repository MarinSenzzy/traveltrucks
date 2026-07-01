export type FormType = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
export type TransmissionType = 'automatic' | 'manual';
export type EngineType = 'diesel' | 'petrol' | 'hybrid' | 'electric';
export type AmenityType =
  | 'ac'
  | 'bathroom'
  | 'kitchen'
  | 'tv'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';

export interface CamperListItemDto {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: FormType;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: TransmissionType;
  engine: EngineType;
  amenities: AmenityType[];
  coverImage: string;
  totalReviews: number;
}

export interface CamperListResponseDto {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItemDto[];
}
export interface FiltersResponseDto {
  forms: FormType[];
  transmissions: TransmissionType[];
  engines: EngineType[];
}
export interface CamperImageEntity {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}
export interface CamperDetailsEntity {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: FormType;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: TransmissionType;
  engine: EngineType;
  amenities: AmenityType[];
  gallery: CamperImageEntity[];
  createdAt: string;
  updatedAt: string;
}
export interface ReviewEntity {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface BookingRequestDto {
  name: string;
  email: string;
}

export interface BookingRequestResponseDto {
  message: string;
}
