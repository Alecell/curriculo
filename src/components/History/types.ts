import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface IRecord {
  title: string;
  placeName: string;
  placeLink: string;
  duration: string;
  description: string;

}

export interface IHistoryProps {
  title: string;
  icon: IconDefinition;
  locationIcon: IconDefinition;
  history: IRecord[];
}