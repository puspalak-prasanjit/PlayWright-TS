@focus
Feature: Focus on an element

  Scenario: An element will be focused
    Given That the url is hit
    When I Select an element to focus
    Then The particular element will be highlighted