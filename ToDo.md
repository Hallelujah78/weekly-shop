# Weekly Shopping List App

## What Do I Want to Achieve?

Have an editable list of all items we buy in the house available on my device via a website.

- Store state in local storage.
- Add and remove items
- Strikethrough Items to show we don't need it this week.
- Toggle/show items that have strikethrough

## 25/3/26 - Nice to have

- permanent storage instead of simply local storage
- sort items by:
  - category (which would correspond to sorting by aisle most likely)
  - alphabetically
- allow click and drag movement of categories
- output list to clipboard

## 26/3/26 - Nice to have

- permanent storage instead of simply local storage
- sort items by:
  - category (which would correspond to sorting by aisle most likely)
  - alphabetically
- allow click and drag movement of categories
- ~~titlecase input when items are added to the list~~

- ~~output list to clipboard~~ **DONE**
  - ~~user clicks the button~~
  - ~~the shopping items are formatted and written to the clipboard~~
  - ~~we notifiy user items saved to clipboard~~

## 28/3/26

- permanent storage instead of simply local storage
  - refactor app to use firebase
- sort items by:
  - category (which would correspond to sorting by aisle most likely)
  - alphabetically within category
- allow click and drag movement of categories

### Sort By Category

- sort order needs to be stored in db
- default sort order will be what?
  - typical layout in most stores
- category will be set on a per item basis

## 28/3/26

- permanent storage instead of simply local storage
  - refactor app to use firebase
- sort items by:
  - category (which would correspond to sorting by aisle most likely)
  - alphabetically within category
- allow click and drag movement of categories

### Major Changes

Let's identify separate pieces of work and decide on the order:

- (5) using firebase real time database instead of local storage
  - prevent abuse by anyone with the api key - limit access/use auth
  - drag and drop will affect the data structure probably, so this should be last?
  - the ordering of categories and how dragging and dropping changes this should persist
- (2) grouping and display items by category
- (2.5) new step: decide the ordering strategy
- (4) allowing drag and drop
- (1) allowing users to set the category when adding an item to the list
- (3) placing some default order on how we display the items grouped by category
  - will differ from the simple order in which the item in the category was added
- (0) new step: define the data model first for items, categories

Order we tackle this is as denoted by (number).

- intuition
  - we should tackle adding categories to items, displaying by category etc first as this will affect what we store in db
