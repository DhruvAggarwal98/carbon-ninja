# Carbon Ninja

Carbon Ninja is a mobile application created to make it easy for people to track the carbon emissions associated with their regular diet. Within the app, users can snap a picture of their meal and receive feedback regarding the carbon footprint of items on their plate. Carbon Ninja does this using IBM Visual Recognition models in conjunction with publicly available carbon emission statistics for common food products.

---
## Table of Contents

1. [Installation](#installing-carbon-ninja)
2. [Usage](#using-carbon-ninja)
    - [Create Account / Sign In](#create-an-account-andor-sign-in) 
    - [Choose Entry Type](#choose-your-entry-type-on-the-landing-page-or-check-out-your-stats) 
    - [Manual Entry](#manual-entry) 
    - [Camera Entry](#camera-entry)   
3. [Metrics](#carbon-ninja-metrics)
4. [Road Map](#carbon-ninja-road-map)
---

## Installing Carbon Ninja

At this time, Carbon Ninja is not available in the App Store or Google Play Store, but you can beta test the app using Expo Go!

1. Install Expo Go from the App Store (iOS) or Google Play Store (Android)
2. Login as a Call for Code tester: **callforcode** / **CallForCode2021**
3. Scan the QR code at our [Expo URL](https://expo.io/@kness/carbon-ninja)

The app should begin to download and you're all set! Create a user account in the Carbon Ninja app and starting tracking your carbon emissions.

---

## Using Carbon Ninja

### Create an account and/or Sign In 
<img src=".attachments/LoginView.png" height="400">

### Choose your entry type on the landing page or check out your stats
<img src=".attachments/LandingView.png" height="400">

### Manual Entry

1. Create an Entry
2. Save Entry
3. Confirm (via Success Alert)

   <img src=".attachments/ManualEntryView.png" height="400">
   <img src=".attachments/EntrySaveView.png" height="400">
   <img src=".attachments/EntrySavedAlert.png" height="400">

### Camera Entry

1. Select Camera
2. Capture Photo
3. Save Entry
4. Confirm (via Success Alert)

   <img src=".attachments/PreCameraEntryView.png" height="400">
   <img src=".attachments/CameraEntryView.png" height="400">
   <img src=".attachments/EntrySaveView.png" height="400">
   <img src=".attachments/EntrySavedAlert.png" height="400">

## Carbon Ninja Metrics

When viewing emission results, you will see the unit "kg" to measure your carbon footprint. The current calculation behind the resulting "kg" looks like the following:

`kg of CO2 emitted for your meal =`

`(food_1_avg_serving_kg * kg_CO2_per_kg_food_1)`

`+ ... +` 

`(food_n_avg_serving_kg * kg_CO2_per_kg_food_n)`

In the future, we hope to improve our AI capabilities to detect portion sizes in the photo submitted. Until then, we will use the average serving size to give you a reasonable estimate!

## Carbon Ninja Road Map

Interesting in knowing what's coming? Check out our [Road Map](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_STHaevz4K3mBYx54T-92LWJH_O68pPTnm4RLY1IRrukQ655fBoCtvf9X3dcizZP62Wq7J-G3SBiP/pubhtml?gid=0&single=true)!