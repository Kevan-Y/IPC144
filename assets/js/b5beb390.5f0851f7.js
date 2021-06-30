(self.webpackChunkipc_144=self.webpackChunkipc_144||[]).push([[1387],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={},l="Style Guidelines",c={unversionedId:"B-Computations/style-guidelines",id:"B-Computations/style-guidelines",isDocsHomePage:!1,title:"Style Guidelines",description:"Learning Outcomes",source:"@site/docs/B-Computations/style-guidelines.md",sourceDirName:"B-Computations",slug:"/B-Computations/style-guidelines",permalink:"/B-Computations/style-guidelines",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/B-Computations/style-guidelines.md",version:"current",frontMatter:{},sidebar:"courseNotesSidebar",previous:{title:"Logic",permalink:"/B-Computations/logic"},next:{title:"Testing & Debugging",permalink:"/B-Computations/testing-and-debugging"}},u=[{value:"Learning Outcomes",id:"learning-outcomes",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Identifiers",id:"identifiers",children:[]},{value:"Layout",id:"layout",children:[{value:"Indentation",id:"indentation",children:[]},{value:"Line Length",id:"line-length",children:[]},{value:"Braces",id:"braces",children:[]},{value:"Spaces",id:"spaces",children:[]},{value:"Comments",id:"comments",children:[]}]},{value:"Magic Numbers",id:"magic-numbers",children:[{value:"Unmodifiable Variables",id:"unmodifiable-variables",children:[]},{value:"Macro Directive",id:"macro-directive",children:[]}]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"style-guidelines"},"Style Guidelines"),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,r.kt)("p",null,"After reading this section, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Self-document programs using comments and descriptive identifiers")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A well-written program is a pleasure to read.  The coding style is consistent and clear throughout.  The programmer looking for a bug sees a well-defined structure and finds it easy to focus on the portion of the code that is suspect.  The programmer looking to upgrade the code sees how and where to incorporate changes.  Although several programmers may have contributed to the code throughout its lifetime, the code itself appears to have been written by one programmer."),(0,r.kt)("p",null,"This chapter describes the coding style used throughout these notes and recommended for an introductory course in programming.  This style is based in part on the Linux kernel coding style published at ",(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/process/coding-style.html#codingstyle"},"https://www.kernel.org/doc/html/latest/process/coding-style.html","#","codingstyle"),".  Conventions that apply specifically to syntax introduced in subsequent chapters are described in those chapters. "),(0,r.kt)("h2",{id:"identifiers"},"Identifiers"),(0,r.kt)("p",null,"All identifiers in a program should be self-descriptive.  The reader should not have to search through the code for their meaning.  It is better to embed the meaning in the name than to explain it in a comment elsewhere in the code.  By all means, avoid referring the reader to a document external to the code itself. "),(0,r.kt)("p",null,"A program with short names is easier to read than one with long names.  The human eye infers the meaning of a word from just a few letters that make up that word and the context within which the word is used.  Reading long identifiers tires the eyes when searching through code.  We follow the sophisticated conventions of our own languages and complying with makes our programs all the more readable.  Nouns describe objects, verbs describe actions."),(0,r.kt)("p",null,"Notations, such as Hungarian notation, that incorporate the type into the identifier klutter source code unnecessarily.  C compilers know the type of each identifier and readers do not need reminders in every place the identifier appears."),(0,r.kt)("p",null,"When selecting identifiers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adopt self-descriptive names, adding comments only if clarification is necessary"),(0,r.kt)("li",{parentName:"ul"},"prefer nouns for variable identifiers"),(0,r.kt)("li",{parentName:"ul"},"keep variable identifiers short - 'tmp' rather than 'temporary', 'no' rather than 'number'"),(0,r.kt)("li",{parentName:"ul"},"avoid cryptic identifiers - use just enough letters for the eye to infer the meaning from the context but no less"),(0,r.kt)("li",{parentName:"ul"},"keep the identifiers of counters very short - use 'i' rather than 'loop","_","counter', 'n' or 'no' rather than 'numberOfTheIteration' - follow mathematical conventions"),(0,r.kt)("li",{parentName:"ul"},"avoid decorating the identifier with Hungarian or similar notations")),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("p",null,"Professionals in the field of human-computer interaction confirm that layout and arrangement affects comfort and accessibility.  Poorly laid out code frustrates and promotes misreading's. "),(0,r.kt)("p",null,"Typographers, artists, and photographers know that negative space surrounding an image is as important as the image itself.  Space itself can visually separate, make it easier to find something and draw attention to a certain part of a page."),(0,r.kt)("p",null,"Layout tools at our disposal include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"indentation"),(0,r.kt)("li",{parentName:"ul"},"line length"),(0,r.kt)("li",{parentName:"ul"},"braces"),(0,r.kt)("li",{parentName:"ul"},"spaces"),(0,r.kt)("li",{parentName:"ul"},"comments")),(0,r.kt)("h3",{id:"indentation"},"Indentation"),(0,r.kt)("p",null,"Indentation helps define where a code block starts and ends, clearly showing the structure of our logic.  The recommended indent in C programs is a tab of 8 characters. "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'for (i = 0; i < n; i++) {\n        for (j = 0; j < n; j++) {\n                for (k = 0; k < n; k++) {\n                        int ijk = i * j * k;\n                        if (ijk != 0)\n                                printf(" %4d", ijk); \n                        else\n                                printf("    ");\n                 }\n                 printf("\\n");\n         }\n         printf("\\n");\n }\n printf("That\'s all folks!!!\\n");\n')),(0,r.kt)("p",null,"Using tabs for indentation rather than spaces enables other programmers to adjust the indentation without difficulty in their own text editors.  Using 8 characters per tab position heavily indents code to the far right and identifies code that may be a hog of compute cycles and a likely candidate for refactoring. "),(0,r.kt)("p",null,"To minimize the effects of indentation with switch constructs, we align the subordinate case labels with the switch keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"switch(c)\n{\ncase 'A' :\ncase 'a' :\n        cost = 1.50;\n        break;\ncase 'B' :\ncase 'b' :\n        cost = 1.10;\n        break;\ncase 'C' :\ncase 'c' :\n        cost = 0.75;\n        break;\ndefault:\n        c = '?';\n        cost = 0.0;\n}\n")),(0,r.kt)("h3",{id:"line-length"},"Line Length"),(0,r.kt)("p",null,"The practical limit on line length is 80 columns, including indentation.  Many windows default to an 80-column width and break longer lines into chunks that are then difficult to read.  Lines longer than 80 columns either truncate or wrap in hard copy printouts, which confuses readers. "),(0,r.kt)("p",null,"String literals pose a special problem.  We break them into a set of sub-string literals separated only by whitespace.  C compilers discard the whitespace and concatenate the sub-string literals into a single string literal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'printf("%d substrings"\n       " display as a"\n       " single string" \n       "\\n", 3);\n')),(0,r.kt)("p",null,"Produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"3 substrings display as a single string \n")),(0,r.kt)("h3",{id:"braces"},"Braces"),(0,r.kt)("p",null,"The style of bracing used in these notes is that proposed by Kernigan and Ritchie.  We put the opening brace at the end of a line and the closing brace as the first non-whitespace character on a new line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7) {\n    cost = 1.75;\n    printf("Congrats!\\n"); \n}\n')),(0,r.kt)("p",null,"The closing brace is on a line of its own, except where the statement continues with more information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7) {\n        cost = 1.75;\n        printf("Congrats!\\n");\n} else {\n        cost = 2.75;\n        printf("Good luck next time!\\n"); \n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'do {\n        printf("Guess i : ");\n        scanf("%d", &i);\n        if (i == 7) {\n                cost = 1.75;\n                printf("Congrats!\\n");\n        } else {\n                cost = 2.75;\n                printf("Good luck next time!\\n"); \n        }\n} while (i != 7);\n')),(0,r.kt)("p",null,"Braces are unnecessary with single statements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7)\n    printf("Congrats!\\n");\nelse\n    printf("Good luck next time!\\n"); \n')),(0,r.kt)("p",null,"However, we do use braces in all branches of a selection construct if one branch requires them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if (i == 7) {\n        printf("Congrats!\\n");\n        done = 1;\n} else {\n        printf("Good luck next time!\\n"); \n}\n')),(0,r.kt)("h3",{id:"spaces"},"Spaces"),(0,r.kt)("p",null,"We add a single space after commas, semi-colons, most keywords and around most operators, except between parentheses and identifiers or constants, after unary operators and call identifiers. "),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'int i; // space after keyword\n\nscanf("%d", &i); // no space after unary operator\n\ni = i * i; // single spaces around binary operators\n\nif (i == 7) // no spaces between identifiers or constants and parentheses \n        printf("Congrats!\\n");\n\nfor (i = 0; i < 10; i++) // single space after ;\n        printf("%d ", i);   // no space after call identifier\n')),(0,r.kt)("p",null,"We avoid trailing spaces at the end of a line. "),(0,r.kt)("p",null,"We add blank lines to distinguish the end of one construct from the start of another whenever either construct contains some complexity.  However, we avoid superfluous blank lines. "),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("p",null,"We use comments to describe what is done, rather than how it is done.  Comments introduce or summarize what follows.  We keep them brief and avoid decoration or cuteness. "),(0,r.kt)("p",null,"If it is important to comment data, we do so at the variable's declaration.  Where units matter, we identify them.  Where we comment variable declarations, we declare each variable on a separate line and use inline comments. "),(0,r.kt)("p",null,"We preface every source file with a header comment that includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the title of the program"),(0,r.kt)("li",{parentName:"ul"},"the source file name"),(0,r.kt)("li",{parentName:"ul"},"the name of the author","(","s",")")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"}," /* Payroll Deductions\n  * payroll.c\n  * Jane Doe\n  */\n")),(0,r.kt)("p",null,"Such header comments are helpful in locating the e-copy corresponding to a hard copy that we have in hand."),(0,r.kt)("p",null,"We align comments with the code they describe, indenting both identically, showing no preference for either comment or code. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// display even integers below 11\n//\nfor (j = 0; j < 11; j += 2) \n    printf(" %d", j);\n')),(0,r.kt)("p",null,"Such comments summarize the code that follows and help the reader avoid studying that code in detail if it is not the target code for which they are searching."),(0,r.kt)("h2",{id:"magic-numbers"},"Magic Numbers"),(0,r.kt)("p",null,"We refer to values that appear out of nowhere in program code as magic numbers.  These may be mathematical constants, standard rates or default values.  We avoid magic numbers by identifying them with symbolic names and using those names throughout the code.  We set their value in either of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using an unmodifiable variable"),(0,r.kt)("li",{parentName:"ul"},"using a macro directive")),(0,r.kt)("h3",{id:"unmodifiable-variables"},"Unmodifiable Variables"),(0,r.kt)("p",null,"An unmodifiable variable takes the form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"}," const type SYMBOL = value;\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'const double PI = 3.14159;\n\n int main(void)\n {\n         double radius, area;\n\n         printf("Enter radius : ");\n         scanf("%lf", &radius);\n         area = PI * radius * radius;\n         printf("The area of your circle is : %lf\\n", area); \n\n         return 0;\n }\n')),(0,r.kt)("h3",{id:"macro-directive"},"Macro Directive"),(0,r.kt)("p",null,"A macro directive takes the form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define SYMBOL value\n")),(0,r.kt)("p",null,"We terminate this directive with an end of line character immediately following value. "),(0,r.kt)("p",null,"The ","#","define directive instructs the C compiler to substitute every occurence of SYMBOL with value throughout the code.  Note the absence of a semi-colon at the end of the directive.  The substitution is a straightforward search and replace.  value itself may include whitespace. "),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},' #define PI 3.14159\n\n int main(void)\n {\n         double radius, area;\n\n         printf("Enter radius : ");\n         scanf("%lf", &radius);\n         area = PI * radius * radius;\n         printf("The area of your circle is : %lf\\n", area); \n\n         return 0;\n }\n')),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("p",null,"Other guidelines for enhancing and maintainability readability include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we avoid global variables ","(","see Global Scope sub-section in the chapter on ",(0,r.kt)("a",{parentName:"li",href:"/D-Modularity/functions-arrays-and-structs"},"Information Hiding"),")"),(0,r.kt)("li",{parentName:"ul"},"we avoid variable identifiers that end in numbers"),(0,r.kt)("li",{parentName:"ul"},"we avoid using the character encodings for a particular environment ","(","for example, ASCII or EBCDIC",")",".  Instead, we use escape sequences, which are universal.  For example, to initialize c to the linefeed character ","(","10 in ASCII and 37 in EBCDIC",")",", use:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// prefer\n//\nchar c = '\\n';\n \n// avoid\n//\nchar c = 10; // ASCII \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we initialize iteration variables in the context of the iteration:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"}," // prefer\n //\n for (i = 0; i < 10; i++)\n \n // avoid\n //\n i = 0;\n for (; i < 10; i++)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we add special comments where code has been fine-tuned for efficient execution"),(0,r.kt)("li",{parentName:"ul"},"we avoid iterations with empty bodies"),(0,r.kt)("li",{parentName:"ul"},"we limit the initialization and iteration clauses in for statements to the iteration variables"),(0,r.kt)("li",{parentName:"ul"},"we avoid assignment expressions nested inside logical expressions"),(0,r.kt)("li",{parentName:"ul"},"we add an extra pair of parentheses where an assignment expression is also used as a condition"),(0,r.kt)("li",{parentName:"ul"},"we remove unreferenced variable declarations from our source code"),(0,r.kt)("li",{parentName:"ul"},"we remove all commented code and debugging statements from our release and production code")))}p.isMDXComponent=!0}}]);