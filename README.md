# Working with DOM
Test task for the position of Junior Frontend Developer

### Technologies
+ JavaScript

### Task descriptions
#### Task №1 
Follow the [link](https://rivegauche.ru/?digiPreview=WXVNXQZEJ) and on the page of any product: write a function that will add a div above the price block with the product price divided by 4.
#### Employer's requirements for task №1
+ The code should only work on the product page
+ The code should be executed only if the price doesn't exceed 30,000
+ In the mobile and desktop versions of the site, the code should work out the same way
+ It's important that the price is taken by the main, and not by discounts
+ If one of the above conditions isn't met, return false

#### Task №2
On the [checkout page](https://rivegauche.ru/checkout/multi) (using cookies) write a function that will add a div block with the text to the DOM above the “More Details” button with the selected payment method “in shares”:
“2 weeks: price, 4 weeks: price, 6 weeks: price, 8 weeks: price”, where price is the final price without discount divided by 4. The price shouldn't exceed 30,000, if more, then output in div:
“2 weeks: 25% 4 weeks: 25% 6 weeks: 25% 8 weeks: 25%”

#### Task №3 
Given the nesting div, you need to return the number with the maximum nesting (in this case, it should return 8).
