Feature: File upload 

  Scenario: A file will be uploaded
    Given I am on the homepage
    When I Select a file to upload
    Then The file will be successfully uploaded