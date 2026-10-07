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