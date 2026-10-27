# The Mythical Man Month
A place to put my thoughts on the book "The Mythical Man Month" during my *annotation* read
through (a second read where I annotate and externalize my thoughts on the book). The intent
is to help better remember the contents of the book, but more so to help me relate the ideas
presented in the book to my work and personal life.

## Chapter 1: The Tar Pit

This chapter is actually something that I have been thinking about quite a bit over the last few months
after reading the book. Specifically where Brooks draws a distinction between the "program", the "programming system",
and the "programming product", as well as the penultimate "programming systems product". His main point
with this is that the burden of producing a piece of code (the "program") that can perform a given operation actually carries
the smallest burden when it comes to the software engineering process. The main sinks as far as time (and therefore
money) goes are in the generalization, testing, integration, and documentation of the program. He splits these requirements
into the two pieces, "programming system" and "programming product".

The division Brooks creates between the programming "system" and "product" is mainly a
distinction between the set of user facing and usability dimensions of software. The programming
system comprising those dimensions that make the software usable within the real work (NFRs, testing,
IO/interfaces) and the product comprising those that make it functional for users (documentation, generalization
portability). Brooks main point here is that while the initial "program" is cheap and easy to make each additional
dimension takes around 3x as long as the initial product. So to extend a program to be a programming product it takes
three times as long as it took to write the program.

In the modern day of AI agents and cheap code its interesting to think about how this concept still applies, and
specifically which parts of it an agent could accomplish independently (or at least greatly accelerate) and which
pieces it would need a heavy human hand with.

The initial program creation piece is obvious, an LLM can quickly and easily generate a program to
accomplish many tasks. Even the testing pieces required by the product and system dimensions can be automated to
some extent (though I would implore anyone to ensure that their suite of agent generated tests is complete and
actually tests the SUT rather than making empty assertions). However, the other pieces all require a greater
level of context that I don't think is possible to provide an agent without a much larger & more intricate
delivery system than we currently have access to.

Take for example generalization, The engineer must have a strong domain model, and solid forward thinking
in order to understand which parts of the system need to be generalized. You can attempt to provide this
to an agent, but it will never be the full picture and engineer has in their head (not to mention all the
context in your PM/QA/Architects heads as well that get's transmitted to you with regular conversations about
the product).

## Chapter 2: The Mythical Man-Month

In the second chapter of his book Brooks dives into one of the most difficult and enduring problems in the
field of software development, project estimating. I think for me what struck me about this chapter in particular is the
degree his points in this chapter are still relevant to this day. Almost everything in "The Mythical Man-Month" is still
relevant to this day (with some minor caveats) but the issues in this chapter have continued to plague industry professionals
to an exasperating degree. Brooks approaches the problem from two different angles, the initial project estimate given as a
ballpark before starting work, and the adjustments an organization makes once the initial estimate inevitably goes awry.

Brooks takes a true "social" perspective in this chapter, aknowledging the interpersonal issues that cause estimates to drag,
and time to completion to increase as you add more collaborators. Who among us hasn't seen a project drag on for longer than required
due to friction between co-workers. This has only expanded even more as teams have spread across time zones and countries. In the
worst cases one may find themselves working cross time-zone, country, and team all at the same time. Coordinating software between
two teams in separate countries is an especially daunting task that adds considerable time demands for cross team communication.
Not only does one need to work on the shared interface but also transmit assumptions "obvious" to one team from their work in a
given technical ecosystem that the other may not be aware of. The cost of finding, then
communicating these assumptions is an extremely cognitively demanding task.

One thing that has changed since the release of this book is the ratio's Brooks provides for how much each sub-task of a software
project will take. Planning (1/3), coding (1/6), component/early system test (1/4), systems test (1/4). Modern testing frameworks
and methodologies have certainly lowered the burden of component and early systems tests by putting them earlier in the development
process and giving easier avenues for writing reusable test suites. I would wager this lowers the burden of component testing to about
equal in effort to the actual coding task with more time being spent on planning and systems tests. The introduction of LLM's has also
certainly changed this ratio. Currently it looks as though LLMs have decreased the amount of time requried to produce any code (test or
otherwise) and increased planning. However, the infantility of these new tools would indicate that this ratio is naive and will change
as our understanding of their use changes.

The second angle Brooks takes in this chapter addresses when during development of a project the estimate is found to be off. He rightly
points out that the instinct is often to throw more man power at the problem. However this comes with the (now obvious) issue of bringing
the new workers up to speed. Additionally they represent a further complication of the dynamic of the team, new members will now have
their opinions/ideas on the project shared. Which while from an engineering perspective this may create a better product, will also slow
the project down even more. This is Brooks previous point that more workers tends to increase the total time a project takes at a certain point.
This is something that modern teams still fall victim to in the modern day. One of the things I had to learn early on in my career is though
an offer to add more workers to a project may sound enticing, it should be carefully considered and planned for before accepting.