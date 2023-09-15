# HybridJsplusts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# to be added in parent to route 
devServer:{
      proxy:{
        "/app/**":{
          target: "http://127.0.0.1:7001/",
          secure: false
        },
        "/assets/**":{
          target: "http://127.0.0.1:7001/",
          secure: false
        }
      }
    }