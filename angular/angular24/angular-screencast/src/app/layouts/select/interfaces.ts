export interface IFacility {
  place: string;
  id: number;
  famous: IFamous[];
}

export interface IFamous {
  name: string;
  value: number;
}
