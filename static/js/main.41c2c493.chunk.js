(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),s=a.n(o),c=a(2),r=a(3),i=a(5),d=a(4),h=a(6);var N=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Noted"))};var u=function(){return l.a.createElement("footer",null)},v=a(7),m=a(1),b=a(10);function E(e){var t=e.note,a=e.handleNoteSelect;return l.a.createElement("li",{id:t.id,className:"saved-note",onClick:a},l.a.createElement("div",{className:"saved-note-title"},t.title),l.a.createElement("p",{className:"saved-note-text-snippet"},t.text),l.a.createElement("div",{className:"saved-note-date"},t.lastSaved))}var S=function(e){var t=e.savedNotes,a=e.handleNoteSelect,n=e.handleNewNote,o=Object(b.a)(t.values()).map(function(e){return l.a.createElement(E,{key:e.id,note:e,handleNoteSelect:a})});return l.a.createElement("div",{className:"all-notes"},l.a.createElement("h2",{id:"all-notes-title"},"All Notes"),l.a.createElement("ul",{id:"saved-notes-list"},o),l.a.createElement("button",{id:"new-note-btn",className:"note-opts-btn",type:"button",onClick:n},l.a.createElement("img",{src:"./assets/add-note.svg",alt:"create new note"})))};function p(e){return l.a.createElement("div",{className:"no-note-selection"},"No selection :o")}function g(e){var t=e.note,a=e.handleNoteChange,n=e.handleSaveNote,o=e.handleClearNote,s=e.handleDeleteNote;return l.a.createElement("div",{className:"edit-note"},l.a.createElement("div",{id:"edit-note-opts-bar",className:"note-opts-bar"},l.a.createElement("button",{id:"edit-note-back-btn",className:"note-opts-btn",type:"button",onClick:o},l.a.createElement("img",{src:"./assets/back-arrow.svg",alt:"clear selected note button"})),l.a.createElement("span",{className:"note-opts-bar-container"},l.a.createElement("button",{id:"edit-note-save-btn",className:"note-opts-btn",type:"button",onClick:n},l.a.createElement("img",{src:"./assets/save-white.svg",alt:"save note button"})),l.a.createElement("button",{id:"edit-note-delete-btn",className:"note-opts-btn",type:"button",onClick:s},l.a.createElement("img",{src:"./assets/delete-white.svg",alt:"save note button"})))),l.a.createElement("input",{id:"edit-note-title",type:"text",value:t.title,onChange:a,placeholder:"Title"}),l.a.createElement("textarea",{id:"edit-note-text",value:t.text,onChange:a,placeholder:"Start writing..."}))}var C=function(e){var t=e.note,a=e.handleNoteChange,n=e.handleSaveNote,o=e.handleClearNote,s=e.handleDeleteNote;console.log("CurrentNote rendered");var c=t?"current-note selected":"current-note";return l.a.createElement("article",{className:c},t?l.a.createElement(g,{note:t,handleNoteChange:a,handleSaveNote:n,handleClearNote:o,handleDeleteNote:s}):l.a.createElement(p,null))},f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={savedNotes:new Map,notesCreated:0,selectedNote:null},a.handleNoteSelect=a.handleNoteSelect.bind(Object(m.a)(Object(m.a)(a))),a.handleSelectedNoteChange=a.handleSelectedNoteChange.bind(Object(m.a)(Object(m.a)(a))),a.handleNewNote=a.handleNewNote.bind(Object(m.a)(Object(m.a)(a))),a.handleClearSelectedNote=a.handleClearSelectedNote.bind(Object(m.a)(Object(m.a)(a))),a.handleSaveNote=a.handleSaveNote.bind(Object(m.a)(Object(m.a)(a))),a.handleDeleteNote=a.handleDeleteNote.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleNewNote",value:function(e){console.log("new note :D");var t=this.state.notesCreated,a={id:t,lastSaved:(new Date).toUTCString(),title:"",text:""};t+=1,this.setState({notesCreated:t,selectedNote:a})}},{key:"handleClearSelectedNote",value:function(e){this.setState({selectedNote:null})}},{key:"isValidNote",value:function(e){return""!==e.title}},{key:"trimNote",value:function(){var e=Object(v.a)({},this.state.selectedNote);return e.title=e.title.trim(),e.text=e.text.trim(),e}},{key:"handleSaveNote",value:function(e){var t=this.trimNote();if(this.isValidNote(t)){t.lastSaved=(new Date).toUTCString();var a=this.state.savedNotes;a.set(t.id,t),this.setState({savedNotes:a})}else alert("COMPUTER SAYS: The note must be filled out to use it...")}},{key:"handleDeleteNote",value:function(e){var t=this.state.savedNotes;this.state.selectedNote?(this.state.savedNotes.delete(this.state.selectedNote.id),this.setState({savedNotes:t,selectedNote:null})):alert("COMPUTER SAYS: Nothing selected to remove...")}},{key:"handleNoteSelect",value:function(e){var t=Number(e.currentTarget.id);this.setState({selectedNote:Object(v.a)({},this.state.savedNotes.get(t))})}},{key:"handleSelectedNoteChange",value:function(e){var t=Object(v.a)({},this.state.selectedNote);switch(e.target.id){case"edit-note-title":t.title=e.target.value;break;case"edit-note-text":t.text=e.target.value;break;default:console.log("Event mod not supported.")}this.setState({selectedNote:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"note-view"},l.a.createElement(S,{savedNotes:this.state.savedNotes,handleNoteSelect:this.handleNoteSelect,handleNewNote:this.handleNewNote}),l.a.createElement(C,{note:this.state.selectedNote,handleNoteChange:this.handleSelectedNoteChange,handleSaveNote:this.handleSaveNote,handleClearNote:this.handleClearSelectedNote,handleDeleteNote:this.handleDeleteNote}))}}]),t}(n.Component),w=(a(17),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(f,null),l.a.createElement(u,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.41c2c493.chunk.js.map