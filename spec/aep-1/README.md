---
aep: 1
title: AEP Purpose and Guidelines
status: Final
type: Meta
author: Greg Osuri (@gosuri), Adam Bozanich (@boz)
discussions-to: https://github.com/ovrclk/aep/issues/1
created: 2020-03-09
updated: 2020-03-17
---
your Draft until you believe the AEP to be mature and ready to proceed to the next status. An AEP in draft status must be implemented to  Core AEP that was rejected by the Core Devs and will not be implemented. An AEP cannot move on from this state.
* **Superseded** -- An AEP which was previously Final but is no longer considered state-of-the-art. Another AEP will be in Final status and reference the Superseded AEP. An AEP cannot move on from this state.


## What belongs in a successful AEP?

Each AEP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the AEP, including the AEP number, a short descriptive title (limited to a maximum of 44 characters), and the author details. See [below](https://github.com/ovrclk/AEPs/blob/master/AEPSS/aep-1.md#aep-header-preamble) for details.
- Abstract - A short (~200 word) description of the technical issue being addressed.
- Motivation (*optional*) - The motivation is critical for AEPs that want to change the Akash protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the AEP solves. AEP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations Akash platform.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g., how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during the discussion.
- Backward Compatibility - All AEPs that introduce backward incompatibilities must include a section describing these incompatibilities and their severity. The AEP must explain how the author proposes to deal with these incompatibilities. AEP submissions without a sufficient backward compatibility treatise may be rejected outright.
- Test Cases - Test cases for implementation are mandatory for AEPs that are affecting consensus changes. Other AEPs can choose to include links to test cases if applicable.
- Implementations - The implementations must be completed before any AEP is given the status "Final," but it need not be completed before the AEP is merged as a draft. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.
- Security Considerations - All AEPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surface risks, and can be used throughout the life cycle of the proposal. E.g., include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks, and how they are being addressed. AEP submissions missing the "Security Considerations" section will be rejected. An AEP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.
- Copyright Waiver - All AEPs must be in the public domain. See the bottom of this AEP for an example copyright waiver.

## AEP Formats and Templates

AEPs should be written in [markdown] format. Image files should be included in a subdirectory of the `assets` folder for that AEP as follows: `assets/aep-N` (where **N** is to be replaced with the AEP number). When linking to an image in the AEP, use relative links such as `../assets/aep-1/image.png`.

Each AEP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

`aep:` *AEP number* (this is determined by the AEP editor)

`title:` *AEP title*

`author:` *a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.*

`status:` *Draft | Last Call | Accepted | Final | Active | Abandoned | Rejected | Superseded*

`type:` *Standard | Informational | Meta*

`created:` *date created on*

`* description:` *short description of the AEP*

`* completed:` *date completed on*

`* estimated-completion:` *date estimated completion on*

`* roadmap:` *major | minor* (will be included in roadmap when specified)

`* discussions-to:` *a url pointing to the official discussion thread*

`* review-period-end:` *date review period ends*

`* category:` *Core | Interface | Economics* (Standards Track AEPs only)

`* updated:` *comma separated list of dates*

`* requires:` *AEP number(s)*

`* replaces:` *AEP number(s)*

`* superseded-by:` *AEP number(s)*

`* resolution:` *a url pointing to the resolution of this AEP*

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the AEP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `resolution` header

The `resolution` header is required for Standards Track AEPs only. It contains a URL that should point to an email message or other web resource where the pronouncement about the AEP is made.

#### `discussions-to` header

While an AEP is a draft, a `discussions-to` header will indicate the mailing list or URL where the AEP is being discussed. 

No `discussions-to` header is necessary if the AEP is being discussed privately with the author.

As a single exception, `discussions-to` cannot point to GitHub pull requests.

#### `type` header

The `type` header specifies the type of AEP: Standards Track, Meta, or Informational. If the track is Standards please include the subcategory (core, interface, or economics).

#### `category` header

The `category` header specifies the AEP's category. This is required for standards-track AEPs only.

#### `created` header

The `created` header records the date that the AEP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the AEP was updated with "substantial" changes. This header is only valid for AEPs of Draft and Active status.

#### `requires` header

AEPs may have a `requires` header, indicating the AEP numbers that this AEP depends on.

#### `superseded-by` and `replaces` headers

AEPs may also have a `superseded-by` header indicating that an AEP has been rendered obsolete by a later document; the value is the number of the AEP that replaces the current document. The newer AEP must have a `replaces` header containing the number of the AEP that it rendered obsolete.

## Auxiliary Files

AEPs may include auxiliary files such as diagrams. Such files must be named AEP-XXXX-Y.ext, where “XXXX” is the AEP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## Transferring AEP Ownership

It occasionally becomes necessary to transfer ownership of AEPs to a new champion. In general, we'd like to retain the original author as a co-author of the transferred AEP, but that's really up to the original author. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the AEP process, or has fallen off the face of the 'net (i.e. is unreachable or isn't responding to email). A bad reason to transfer ownership is because you don't agree with the direction of the AEP. We try to build consensus around an AEP, but if that's not possible, you can always submit a competing AEP.

If you are interested in assuming ownership of an AEP, send a message asking to take over, addressed to both the original author and the AEP editor. If the original author doesn't respond to email in a timely manner, the AEP editor will make a unilateral decision (it's not like such decisions can't be reversed).

## AEP Editors

The current AEP editors are:

* Greg Osuri ([@gosuri](http://github.com/gosuri))
* Anil Murty ([@anilmurty](http://github.com/anilmurthy))
* Artur Troian ([@troian](http://github.com/troian))
* Cheng Wang ([@lechenghiskhan](http://github.com/lechenghiskhan))
* Adam Bozanich ([@boz](http://github.com/boz))

## AEP Editor Responsibilities

For each new AEP that comes in, an editor does the following:

- Read the AEP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the AEP for language (spelling, grammar, sentence structure, etc.), markup (GitHub flavored Markdown), code style

If the AEP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the AEP is ready for the repository, the AEP editor will:

- Assign an AEP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this AEP)

- Merge the corresponding pull request

- Send a message back to the AEP author with the next step.

Many AEPs are written and maintained by developers with write access to the Akash codebase. The AEP editors monitor AEP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on AEPs. We merely do the administrative & editorial part.

## History

This document was derived heavily from [Ethereum's EIP-1] written by Martin Becze, Hudson Jameson, and others, which in turn was derived from [Bitcoin's BIP-0001]. In many places, the text was copied and modified. Although Amir Taaki wrote the BIP-0001 text, Amir is not responsible for its use in the Akash Improvement Process, and should not be bothered with technical questions specific to Akash or the AEP. Please direct all comments to the AEP editors.

## Bibliography

[EIP]: https://github.com/ethereum/EIPs
[Ethereum's EIP-1]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md
[Bitcoin's BIP-0001]: https://github.com/bitcoin/bips
[Akash Technical Chat]: https://discord.akash.network/
[Pull request]: https://github.com/ovrclk/AEPs/pulls

## Copyright

All content herein is licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).
