import React from "react";

import {
  Code,
  FormatBold,
  FormatClear,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  Highlight,
  InsertLink,
  PhotoLibrary,
  Redo,
  Save,
  StrikethroughS,
  Title,
  Undo,
} from "@material-ui/icons";

import {TStyleType} from "./types";

export const STYLE_TYPES: TStyleType[] = [
  {
    label: "H2",
    name: "title",
    style: "header-two",
    icon: <Title />,
    type: "block",
  },
  {
    label: "Bold",
    name: "bold",
    style: "BOLD",
    icon: <FormatBold />,
    type: "inline",
  },
  {
    label: "Italic",
    name: "italic",
    style: "ITALIC",
    icon: <FormatItalic />,
    type: "inline",
  },
  {
    label: "Underline",
    name: "underline",
    style: "UNDERLINE",
    icon: <FormatUnderlined />,
    type: "inline",
  },
  {
    label: "Strikethrough",
    name: "strikethrough",
    style: "STRIKETHROUGH",
    icon: <StrikethroughS />,
    type: "inline",
  },
  {
    label: "Highlight",
    name: "highlight",
    style: "HIGHLIGHT",
    icon: <Highlight />,
    type: "inline",
  },
  {
    label: "Undo",
    name: "undo",
    style: "UNDO",
    icon: <Undo />,
    type: "callback",
  },
  {
    label: "Redo",
    name: "redo",
    style: "REDO",
    icon: <Redo />,
    type: "callback",
  },
  {
    label: "Link",
    name: "link",
    style: "LINK",
    icon: <InsertLink />,
    type: "callback",
    id: "link-control",
  },
  {
    label: "Media",
    name: "media",
    style: "IMAGE",
    icon: <PhotoLibrary />,
    type: "callback",
    id: "media-control",
  },
  {
    label: "UL",
    name: "bulletList",
    style: "unordered-list-item",
    icon: <FormatListBulleted />,
    type: "block",
  },
  {
    label: "OL",
    name: "numberList",
    style: "ordered-list-item",
    icon: <FormatListNumbered />,
    type: "block",
  },
  {
    label: "Blockquote",
    name: "quote",
    style: "blockquote",
    icon: <FormatQuote />,
    type: "block",
  },
  {
    label: "Code Block",
    name: "code",
    style: "code-block",
    icon: <Code />,
    type: "block",
  },
  {
    label: "Clear",
    name: "clear",
    style: "clear",
    icon: <FormatClear />,
    type: "callback",
  },
  {
    label: "Save",
    name: "save",
    style: "save",
    icon: <Save />,
    type: "callback",
  },
];
