import {Component, TrackByFunction} from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {SelectGroupComponent} from './select-group/select-group.component';
import {IFacility} from './interfaces';
import FAMOUS from './response';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-sidebar-selector',
  templateUrl: './sidebar-selector.component.html',
  styleUrls: ['./sidebar-selector.component.scss'],
  standalone: true,
  imports: [SharedModule, SelectGroupComponent],
})
export class SidebarSelectorComponent {
  public groups: IFacility[] = FAMOUS;
  public allFamousAmount = this.groups?.reduce((acc, el) => acc + el.famous.length, 0);
  public selectAllToggle = false;
  public selectedFamousList: { [id: number]: number[] } = {};
  public selectedLength = 0;
  public form: FormGroup = new FormGroup({});

  public selectedFamous({ id, selected }: { id: number; selected: number[] }) {
    this.selectedFamousList[id] = selected;

    this.selectedLength = Object.values(this.selectedFamousList).flat().length;
  }

  public onToggleSelectAll() {
    this.selectAllToggle = !this.selectAllToggle;

    if (this.selectAllToggle) {
      this.selectedFamousList = this.groups.reduce((acc, el) => {
        return { ...acc, [el.id]: el.famous.map((el) => el.value) };
      }, {});
    } else {
      this.selectedFamousList = {};
    }

    this.selectedLength = Object.values(this.selectedFamousList).flat().length;
  }

  public onCreateNew() {
    console.log(this.selectedFamousList);
    console.log(Object.values(this.selectedFamousList));
    console.log(Object.values(this.selectedFamousList).flat());
  }

  public trackFn: TrackByFunction<IFacility> = (_: number, item: IFacility) => item.id;
}
