"use client";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2
} from 'lucide-react' 

import { Toggle } from '../ui/toggle' 
type Props = {
  editor: Editor | null;
}

export function Toolbar({
  editor
}: Props) {
  if (!editor) return null;
  return <div className="border-t border-r border-l border-border rounded-t-md bg-transparent flex items-center gap-1 p-1">
    <Toggle size="sm" pressed={editor.isActive("heading")} onPressedChange={() => editor.chain().focus().toggleHeading({level:2}).run()}>
  <Heading2 size={20} />
    </Toggle>
    <Toggle size="sm" pressed={editor.isActive("bold")} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
      <Bold size={20} />
    </Toggle>
    <Toggle size="sm" pressed={editor.isActive("italic")} onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
      <Italic size={20} />
    </Toggle>
    <Toggle size="sm" pressed={editor.isActive("strike")} onPressedChange={() => editor.chain().focus().toggleStrike().run()}>
      <Strikethrough size={20} />
    </Toggle>
    <Toggle size="sm" pressed={editor.isActive("bulletList")} onPressedChange={() => editor.chain().focus().toggleBulletList().run()}>
      <List size={20} />
    </Toggle>
    <Toggle size="sm" pressed={editor.isActive("orderedList")} onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}>
      <ListOrdered size={20} />
    </Toggle>
  </div>

}