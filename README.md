# DrishtiAdmin

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes 
- While running ```ng build``` if the following error occurs, follow the steps to get rid of it.
> ERROR in Error: DataTableModule is not an NgModule
1. go to ```node_modules/angular-2-data-table-bootstrap4/dist/index.d.ts``` 
2. add the following lines: 
    > import {NgModule} from '@angular/core'
    > @NgModule({}) export declare class DataTableModule {
    > }
3. This is how the file looks like after update
    ```
    import {NgModule} from '@angular/core'
    import { DataTable } from './components/table.component';
    import { DataTableColumn } from './components/column.component';
    import { DataTableRow } from './components/row.component';
    import { DataTablePagination } from './components/pagination.component';
    import { DataTableHeader } from './components/header.component';
    export * from './components/types';
    export * from './tools/data-table-resource';
    export { DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader };
    export declare const DATA_TABLE_DIRECTIVES: (typeof DataTable | typeof DataTableColumn)[];
    @NgModule({}) export declare class DataTableModule {
    }
    ```    


