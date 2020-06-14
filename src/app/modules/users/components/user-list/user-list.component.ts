import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
  { id: 11, name: 'Sodium' },
  { id: 12, name: 'Magnesium' },
  { id: 13, name: 'Aluminum' },
  { id: 14, name: 'Silicon' },
  { id: 15, name: 'Phosphorus' },
  { id: 16, name: 'Sulfur' },
  { id: 17, name: 'Chlorine' },
  { id: 18, name: 'Argon' },
  { id: 19, name: 'Potassium' },
  { id: 20, name: 'Calcium' },
];

export interface Filter {
  name: string;
  id: number;
  menu: any
}

@Component({
  selector: 'my-app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'status'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  filters: Filter[] = [
    {
      id: 1,
      name: 'Sector',
      menu: [
        { id: 1, name: 'Sector 01' },
        { id: 2, name: 'Sector 02' },
        { id: 3, name: 'Sector 03' },
        { id: 4, name: 'Sector 04' },
        { id: 5, name: 'Sector 05' },
        { id: 6, name: 'Sector 06' },
      ]
    },
    {
      id: 2,
      name: 'Company',
      menu: [
        { id: 1, name: 'Company 01' },
        { id: 2, name: 'Company 02' },
        { id: 3, name: 'Company 03' },
        { id: 4, name: 'Company 04' },
        { id: 5, name: 'Company 05' },
        { id: 6, name: 'Company 06' },
      ]
    },
    {
      id: 3,
      name: 'Start Date',
      menu: [
        { id: 2, name: 'Today' },
        { id: 3, name: 'Yesterday' },
        { id: 4, name: 'Last 7 days' },
        { id: 5, name: 'Last 30 days' },
        { id: 6, name: 'Last 30 month' },
      ]
    },
    {
      id: 4,
      name: 'End Date',
      menu: [
        { id: 2, name: 'Today' },
        { id: 3, name: 'Yesterday' },
        { id: 4, name: 'Last 7 days' },
        { id: 5, name: 'Last 30 days' },
        { id: 6, name: 'Last 30 month' },
      ]
    },
    {
      id: 5,
      name: 'Priority',
      menu: [
        { id: 1, name: 'Priority 01' },
        { id: 2, name: 'Priority 02' },
      ]
    },
  ];
  addedFilters = [];
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  remove(filter: Filter) {
    const index = this.addedFilters.findIndex(a => a.id === filter.id);
    if (index > -1) {
      this.addedFilters.splice(index, 1);
    }
  }

  onSelectFilter(filter: Filter) {
    if (this.addedFilters.findIndex(a => a.id === filter.id) === -1) {
      this.addedFilters.push(filter);
    }
  }

}
