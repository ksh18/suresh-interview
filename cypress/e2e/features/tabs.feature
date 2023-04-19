Feature: tabs feature

  Background:
    Given user visits sky news website

  Scenario Outline: verify the tab’s title
    When selected "<tabItems>" tab
    Then tab title should have "<tabItems>"
    Examples:
      | tabItems         |
      | UK               |
      | World            |
      | Politics         |
      | US               |
      | Climate          |
      | Science & Tech   |
      | Business         |
      | Ents & Arts      |
      | Travel           |
      | Offbeat          |
      | Analysis         |
      | Data & Forensics |
      | Videos           |
      | Weather          |

  Scenario: verify the number of categories displayed and their names
    Then user should see 15 categories
    And the categories titles should match with
      | tabItems         |
      | Home             |
      | UK               |
      | World            |
      | Politics         |
      | US               |
      | Climate          |
      | Science & Tech   |
      | Business         |
      | Ents & Arts      |
      | Travel           |
      | Offbeat          |
      | Analysis         |
      | Data & Forensics |
      | Videos           |
      | Weather          |

  Scenario: verify the default focus is on home page
    Then "Home" tab should be selected

  Scenario: verify that if the user clicks on ‘Climate’, this becomes the focus.
    When selected "Climate" tab
    Then "Climate" tab should be selected

  Scenario: Verify the title of the selected article appears once the title of the page loads.
    When user click on site headline
    Then the title of the page should be the title of the selected article