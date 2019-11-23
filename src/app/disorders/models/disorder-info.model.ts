export interface DisorderInfo {
  id: string;
  label: string;
//  translateLabel?
  info: string;
  group: DisableDisorderGroup;
}

// just FYI: BPD = personality disorder
export type DisableDisorderGroup = 'PSYCHO' | 'PD' | 'NEUROTIC' | 'HEALTHY';
