Feature: Test

  @dev
  Scenario: Testing with expect (
    Given I go on "http://www.angularjs.org"
    Then the title should equal "AngularJS — Superheroic JavaScript MVW Framework"; (expect)

  @dev
  Scenario: Testing with assert (
    Given I go on "http://www.angularjs.org"
    Then the title should equal "AngularJS — Superheroic JavaScript MVW Framework"; (assert)

