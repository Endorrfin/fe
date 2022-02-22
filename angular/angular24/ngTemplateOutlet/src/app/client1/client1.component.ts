import { Component, OnInit } from '@angular/core';
import {
  faSkullCrossbones,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";

export interface Shark {
  name: string;
  latinName: string;
  status: string;
}

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.scss']
})
export class Client1Component implements OnInit {
  sharks: Shark[] = [
    {
      name: "Great White",
      latinName: "Carcharodon carcharias",
      status: "Vunerable",
    },
    {
      name: "Great hammerhead",
      latinName: "Sphyrna mokarran",
      status: "Endangered",
    },
    {
      name: "Angular roughshark",
      latinName: "Oxynotus centrina",
      status: "Vunerable",
    },
    {
      name: "Pyjama",
      latinName: "Poroderma africanum",
      status: "Near Threatend",
    },
  ];

  safeSharks = ["Angular roughshark", "Pyjama"];
  selectedShark: Shark = {} as Shark;

  sharkDisplay = (shark: Shark) => {
    return `${shark.name} (${shark.latinName})`;
  };

  getSwimIcon = (shark: Shark) => {
    const icon = this.safeSharks.indexOf(shark.name) >= 0
      ? faSwimmer
      : faSkullCrossbones;
    return icon;
  };


  constructor() { }

  ngOnInit(): void {
  }

}
