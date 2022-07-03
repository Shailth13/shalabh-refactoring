# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Question 1. Ticket Breakdown:

I've broken down the ticket into 5 sub tickets, trying to match the use of tools like JIRA/Monday that I usually use in the whiteboard provided here:

TC_01: Model to generate AnonymousWebId (AWI): To generate a unique identifier for each Agent/User.
Scope: Use a Security Algo. like SHA1, SHA2, or UUID(package library) to generate hashing algorithms.
Acceptance Criteria: Creates and maintains unique encryption for each Agent created or queried.
Time estimate/story points: 1 man hour/ 1

TC_02: Identifying Agents/Users: An Agent/User should be uniquely identified through a unique Web ID (Application/view layer).
Scope: All transactions on the application layer are conducted using the AWI.
Acceptance: The application layer should conduct and maintain all CRUD operations using AWI. The operations include CREATE, UPDATE, DELETE, READ and Routing.
Time estimate/story points: 5 man hour/ 5

TC_03: AWI tracking: AWI should satisfy the following scenarios:
a) Multiple days on a single device, single login
b) Multiple days on multiple devices, single login
c) Multiple days on multiple devices, multiple logins (in case agent is logged in on both web app and mobile app)
Scope: integration and regression testing for devices and agents
Acceptance: the model should pass all use case scenarios deploying integration, regression and smoke/stress testing.
Time estimate/story points: 5 man hour/ 5

TC_04:AWI mapping: To create Identification tables for AWI. Agent info is stored in tables AGENT and AGENTIDENTIFIER which has AgentID and AW_ID mapping respectively.
Scope: To create a new table called AGENTIDENTIFIER to establish an internal mapping between AWI and AgentID referencing the respective tables.
Acceptance: AGENTIDENTIFIER has all identifying events and timestamps for the events. a) All queries and transaction in the frontend and in the business logic layer (services) is done using AWI. b) AGENT table having AgentID has only unique identifying method calls (single source of truth).
Time estimate/story points: 8 man hour/ 8

TC_05: AWI expiration, token binding and updates: The AWI should have a shelf-life for an year(365 days) on gateway set using primary JWT, It can also be reset using secondary tokenID:
Scope: a) Idle time beyond 3 months(just an example),
b) Hard reset (cookies and local storage by user/agent)
c) During duplicate ID creation or fallback on null assignment to existing token.
d) Overwriting existing token / handling attribution problem
Acceptance: to satisfy the scenarios as mentioned in scope.
Time estimate/story points: 8 man hour/ 8

\*Separate user stories/tickets should be raised for integration/automation/UAT testing for the tickets mentioned above.
