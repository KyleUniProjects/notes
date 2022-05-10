# EECS 3311 - Final Project

### Kyle Schwartz

### 216213621

### 2022-04-16

## Implementation vs Midterm

When building this project, I started by implementing my midterm as close as I could. Once I had it all setup, I quickly found that the way I had designed it worked well in theory, but was missing a lot in implementation. The biggest difference is the lack of GUI-related classes in the midterm. That alone nearly doubled the size of the diagram.

Directly comparing the two is not really an option. The design of the final project is almost entirely different compared to the midterm. The `User` hierarchy remains mostly unchanged as modifying that would have had ripple effects throughout the entire project.

## Completion of Requirements

- 4.1 
  - Req 1: `account_management.Auth.login`
  - Req 2: `account_management.Auth.signup`
  - Req 3: `views.Login.showError`
- 4.2 
  - Req 1: `account_management.Auth.changeID`
  - Req 2: Requirement unclear. Most likely covered elsewhere.
  - Req 3: `views.Controller.addFavourite`, `views.Controller.remFavourite`
  - Req 4: `views.Controller.getUserData`, `views.Controller.deleteAcc`
- 4.3.1
  - Req 1: `views.Controller.addStoreItem`, `views.Controller.remStoreItem`, `views.Controller.updateStoreItem`
  - Req 2: `stores.Item.stock`, `views.Controller.updateItem`
  - Req 3: `views.Controller.getSystemSales`, `views.Controller.getStoreSales`, `views.Controller.addSaleItem`, `views.Controller.remSaleItem`
  - Req 4: `views.Controller.getSystemSales`, `views.Controller.getStoreSales`, `views.Controller.addSaleItem`, `views.Controller.remSaleItem`
- 4.3.2
  - Req 1: `views.Controller.addStore`, `views.Controller.remStore`
  - Req 2: `views.Controller.updateStore`
  - Req 3: `views.Controller.updateStore`, `stores.Store.storeMap`, `stores.Section.addSection`, `stores.Section.remSection`
  - Req 4: `stores.Store.updateHours`
  - Req 5: `views.Controller.updateStore`, `stores.Store.storeMap`, `stores.Section.addSection`, `stores.Section.remSection`
- 4.3.3
  - Req 1: `stores.Store.addManager`, `stores.Store.remManager`
  - Req 2: `views.Controller.getManagers(stores.Store)`
  - Req 3: `views.Controller.getManagers(stores.Store)`
- 4.4.1
  - Req 1: `views.Controller.nearbyStores(javax.swing.JTextField)`, `views.Controller.nearbyStores(misc.Location)`
  - Req 2: `views.Controller.addFavourite`, `views.Controller.remFavourite`
  - Req 3: `views.Controller.setCurStore`
- 4.4.2
  - Req 1: `stores.Store.findItems`, `views.FindAnItem.categorySelected`
  - Req 2: `stores.Item`, `stores.Item.ItemSize`
- 4.4.3
  - Req 1: `account_management.Customer.addFavStore`
  - Req 2: `views.Controller.addToShoppingList`, `views.Controller.remFromShoppingList`
  - Req 3: `views.Controller.getStoreItems`, `account_management.Customer.shoppingLists`
- 4.4.4
  - Req 1: `stores.StoreManager.getBestOrder`, `views.Controller.getShoppingLists`
- 4.5
  - Req 1: `stores.StoreManager.getSalesWeek`
  - Req 2: Not implemented. Ran out of time

## Testing

### Requirement Tests Skipped

- 4.1 - Req 3: UI-related
- 4.2 - Req 2: Requirement unclear. Users have passwords.
- 4.2 - Req 3: UI-related
- 4.3.1 - Req 4: Redundant as admins access the same functions as managers
- 4.4.2 - Req 2: UI-related
- 4.5 - Req 2: Not implemented. Ran out of time

### Code Coverage

- Please disregard anything in the `views` package as it is just for GUI-related functions
- Code line % coverage of the `utils` package will be ~95% on first run, but drop to ~43% on subsequent runs. This is due to `DB.java` containing code to populate the database ONLY when it is empty.
- Coverage results can be found in the `codecov` folder

## Attributions

- [Pin icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/pin)
- [Shopping icons created by justicon - Flaticon](https://www.flaticon.com/free-icons/shopping)
