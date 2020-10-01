# Induct Gateway

## Description

This web application provides an integrated user experience for managing, creating and deploying Induct Apps. Gateway is built using Vue3.

## Structure

The first version of Gateway should support the following pages:
- *Dashboard*: the dashboard provides an overview of the currently known applications, and their status. This should be displayed in a table format. The application data is read from a local source (on disk or in browser). For each application the following information should be displayed:
    1. The host address (and port) where the application can be reached. Ex: localhost:3000/api;
    2. The last known status of the application. Ex: stopped/running;
    3. A button to check the status
- *Create Application*: A form to generate a new application. Makes API calls to induct-generator-server, should locally (on disk or in browser) store application info.

## Wish list

Extra features that could be added later are:
- Deploying applications to cloud and hosting providers. Requires some form of direct integration (such as Oauth2) in order to authenticate and authorize against cloud provider APIs;
- Account and user management;