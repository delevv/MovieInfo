import { CompanyInList } from './company-in-list';
import { Country } from './country';
import { Genre } from './genre';
import { Language } from './language';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  overview: string;
  production_companies: CompanyInList[];
  production_countries: Country[];
  release_date: string[];
  revenue: number;
  runtime?: number;
  spoken_languages: Language[];
  status: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
