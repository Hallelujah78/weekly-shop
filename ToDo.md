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
