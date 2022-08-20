var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("@remix-run/react/server");
var import_server2 = __toESM(require("react-dom/server"));
var import_styled_components = require("styled-components");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = import_server2.default.renderToString(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_server.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/kata/workspace/socker-fe/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root
});
var import_react = require("@remix-run/react");
function Root() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: "Frontend for the socker."
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    href: "/logo192.png"
  }), /* @__PURE__ */ React.createElement("title", null, "Socker-fe"), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", {
    style: { background: "#48dbfb" }
  }, /* @__PURE__ */ React.createElement("div", {
    id: "root"
  }, /* @__PURE__ */ React.createElement(import_react.Outlet, null), /* @__PURE__ */ React.createElement(import_react.Scripts, null))));
}

// route:/Users/kata/workspace/socker-fe/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  UserContext: () => UserContext,
  default: () => routes_default
});
var import_react4 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));

// app/components/CreateGame.tsx
var import_styled_components2 = __toESM(require("styled-components"));
var CreateGame = (props) => {
  return /* @__PURE__ */ React.createElement(StyledButton, {
    onClick: props.handleCreateGame
  }, "Create game");
};
var StyledButton = import_styled_components2.default.button`
	margin: auto;
	padding: 6px 12px;
	outline: none;
	border: none;
	border-radius: 5px;
	text-align: center;
	background: #ff9ff3;
	font-size: 30px;
	box-shadow: 2px 3px #f368e0;
	color: #222f3e;
	font-family: 'Amatic SC', cursive;
	 :active {
		background: #f368e0;
		box-shadow: none;
	 }
`;
var CreateGame_default = CreateGame;

// app/components/WordsPart.tsx
var import_react2 = require("react");
var import_styled_components5 = __toESM(require("styled-components"));

// app/components/IncomingWord.tsx
var import_styled_components3 = __toESM(require("styled-components"));
var IncomingWord = (props) => /* @__PURE__ */ React.createElement(StyledWord, null, props.incomingWord);
var StyledWord = import_styled_components3.default.p`
	text-align: center;
`;
var IncomingWord_default = IncomingWord;

// app/components/OutgoingWord.tsx
var import_styled_components4 = __toESM(require("styled-components"));
var OutgoingWord = (props) => {
  return /* @__PURE__ */ React.createElement(StyledInput, {
    value: props.outgoingWord,
    onChange: (event) => props.setOutgoingWord(event.target.value)
  });
};
var StyledInput = import_styled_components4.default.input`
	width: 240px;
	padding: 6px 12px;
	outline: none;
	border-radius: 5px;
	border: 2px solid #0abde3;
	font-family: 'Amatic SC', cursive;
	font-size: 30px;
	text-align: center;
`;
var OutgoingWord_default = OutgoingWord;

// app/components/WordsPart.tsx
var WordPart = (props) => {
  const [incomingWord, setIncomingWord] = (0, import_react2.useState)("");
  return /* @__PURE__ */ React.createElement(Container, null, incomingWord && /* @__PURE__ */ React.createElement(IncomingWord_default, {
    setIncomingWord,
    incomingWord
  }), /* @__PURE__ */ React.createElement(OutgoingWord_default, {
    setOutgoingWord: props.setOutgoingWord,
    outgoingWord: props.outgoingWord
  }));
};
var Container = import_styled_components5.default.div`
	margin: 32px auto 0 auto;
`;
var WordsPart_default = WordPart;

// app/components/PlayersPart.tsx
var import_react3 = __toESM(require("react"));
var PlayersPart = () => {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null);
};
var PlayersPart_default = PlayersPart;

// route:/Users/kata/workspace/socker-fe/app/routes/index.tsx
var import_axios = __toESM(require("axios"));
var user = {
  name: "Kata",
  email: "katarina.cvetkovicova@gmail.com"
};
var opponent = {
  email: "matejstrnad@icloud.com"
};
var initialUserContext = {
  userName: ""
};
var userContext = initialUserContext;
var UserContext = import_react4.default.createContext(userContext);
function App() {
  const [isWordsPartVisible, setIsWordsPartVisible] = (0, import_react4.useState)(false);
  const [isPlayersPartVisible, setIsPlayersPartVisible] = (0, import_react4.useState)(false);
  const [outgoingWord, setOutgoingWord] = (0, import_react4.useState)("");
  const [sendWordButton, showSendWordButton] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    if (outgoingWord.length > 2) {
      showSendWordButton(true);
    }
  }, [outgoingWord]);
  const onSendWord = () => {
    import_axios.default.post("http://localhost:8080/word", {
      body: {
        userEmail: user.email,
        opponentEmail: opponent.email,
        word: outgoingWord
      }
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  };
  return /* @__PURE__ */ import_react4.default.createElement(UserContext.Provider, {
    value: userContext
  }, /* @__PURE__ */ import_react4.default.createElement(AppContainer, null, /* @__PURE__ */ import_react4.default.createElement(CreateGame_default, {
    handleCreateGame: () => setIsWordsPartVisible(true)
  }), isPlayersPartVisible && /* @__PURE__ */ import_react4.default.createElement(PlayersPart_default, null), isWordsPartVisible && /* @__PURE__ */ import_react4.default.createElement(WordsPart_default, {
    outgoingWord,
    setOutgoingWord
  }), sendWordButton && /* @__PURE__ */ import_react4.default.createElement(SendWordButton, {
    onClick: onSendWord
  }, "Send")));
}
var AppContainer = import_styled_components6.default.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin-top: 320px;
`;
var SendWordButton = import_styled_components6.default.button`
	margin: auto;
	padding: 6px 12px;
	outline: none;
	border: none;
	border-radius: 5px;
	text-align: center;
	background: #1dd1a1;
	font-size: 30px;
	box-shadow: 2px 3px #10ac84;
	color: #222f3e;
	font-family: 'Amatic SC', cursive;
	margin-top: 32px;
	 :active {
		background: #10ac84;
		box-shadow: none;
	 }
`;
var routes_default = App;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "6b56b57d", "entry": { "module": "/build/entry.client-725QT4YR.js", "imports": ["/build/_shared/chunk-YRJAIDWA.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-IR7DAHMY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QZAT4IG2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6B56B57D.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
