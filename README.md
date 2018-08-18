# Portfolio Website

**This is my personal portfolio website, modified from Traversy Media's responsive portfolio website tutorial.**

The original tutorial series can be found here: [Responsive Portfolio Website Tutorial](https://www.youtube.com/watch?v=gYzHS-n2gqU&list=PLillGF-RfqbYoGoCjKoMOkVznV6aSXKzU).

## Why use a tutorial?

In the 12 agile principles, as outlined by [Agile Alliance](https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/), point 1 states:

> Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.

In this instance, I believe I qualify as the customer and my desire is for a professional looking, easily navigable and responsive website. A quick route to achieve an MVP to satisfy this desire was to follow the tutorial from [Traversy Media](https://www.traversymedia.com/) and build upon an established pattern which I could then customise and alter to my own specification.

I also found that following a tutorial certainly minimizes the amount of effort it takes to build a strong foundation and to get a project started, satisfying point 10 of the agile principles, which states:

> Simplicity--the art of maximizing the amount of work not done--is essential.

Whilst using a premade template would have been quicker and probably easier, this methodology also had the added bonus of giving me an opportunity to go over and refresh some basics of web-development.

## Changes

In the process of building this site I made a series of changes to the original tutorial to fit my own needs and preferences.

These changes include but are not limited to:

- Changes css to reflect mobile first ideology.
- All clickables are converted from divs to links or buttons to improve accessibility.
- Semi-transparent colour removed from .sm-heading.
- Set a max-width of 1600px for content on the site.
- Align .sm-heading with other elements in heading container.
- Uses a colour scheme of my own chosing.
- Position styling cascades down from parents to children. Prefering padding in parents and margin-bottom in higher children rather than margin-top on child (or lower child) elements (where possible).
- Better aligns elements on site.
- Sparates projects into art, web-development and games development pages.
- Adds highlights on main page. (TODO)
- Changes show class to hide as this prevents having to define display property for every element.
- Improves UX by removing nav slide in.
- Removes hover animation for contact boxes.
- Try to reduce repetition as much as possible by using sass' awesomeness.
- Separates scss out into individual files per section.

## Acknowledgements

[Responsive Portfolio Website Tutorial](https://www.youtube.com/watch?v=gYzHS-n2gqU&list=PLillGF-RfqbYoGoCjKoMOkVznV6aSXKzU) by [Traversy Media](https://www.traversymedia.com/).
