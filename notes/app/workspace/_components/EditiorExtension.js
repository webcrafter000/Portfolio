import { chatSession } from '@/configs/AIModel';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { ListBulletIcon } from '@radix-ui/react-icons';
import { useAction, useMutation } from 'convex/react';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Download,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  Space,
  Sparkles,
  Strikethrough,
  TextQuote,
  Underline,
} from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import { toast } from 'sonner';
import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { FileSaveContext } from '@/app/_context/FileSaveContext';

function EditiorExtension({ editor }) {
  const { fileId } = useParams();
  const SearchAI = useAction(api.myAction.search);
  const saveNotes = useMutation(api.notes.AddNotes);
  const { user } = useUser();
  const { fileSave, setFileSave } = useContext(FileSaveContext);

  const onAiClick = async () => {
    toast("AI is processing your request...");

    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      ' '
    );

    console.log("Selected text:", selectedText);

    const result = await SearchAI({
      query: selectedText,
      fileId: fileId,
    });

    const UnformattedAns = JSON.parse(result);
    let AllUnformattedAns = '';

    UnformattedAns?.forEach((item) => {
      AllUnformattedAns += item.pageContent;
    });

    const PROMPT = `
      You are an AI assistant specializing in generating contextually accurate answers. 
      Based on the following selected query: "${selectedText}", use the content below to create an informative response.

      Content from the document:
      ${AllUnformattedAns}

      Your tasks:
      1. Provide a concise and well-structured answer in **HTML** format.
      2. Highlight key points with <strong> and <mark> tags for emphasis.
      3. Ensure the response directly addresses the query.

      HTML-formatted answer:
    `;

    const AiModelResult = await chatSession.sendMessage(PROMPT);
    const RawResponse = await AiModelResult.response.text();
    const FinalAns = RawResponse.replace(/```/g, '').replace(/html/g, '').trim();

    const AllText = editor.getHTML();
    editor.commands.setContent(AllText + '<p><strong>Answer:</strong> ' + FinalAns + '</p>');

    saveNotes({
      notes: editor.getHTML(),
      fileId: fileId,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });

    toast("AI response added!");
  };

  const download = () => {
    console.log(editor.getHTML());
    const htmlString = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><title>Document</title></head>
      <body>${editor.getHTML()}</body>
      </html>
    `;
    let converted = htmlDocx.asBlob(htmlString);
    saveAs(converted, 'document.docx');
  };

  useEffect(() => {
    if (editor && fileSave) {
      saveNotes({
        notes: editor.getHTML(),
        fileId: fileId,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      toast('File Saved');
    }
  }, [fileSave, editor]);

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    editor && (
      <div className='p-5'>
        <div className="control-group">
          <div className="button-group flex gap-3">
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive('heading', { level: 1 }) ? 'text-blue-500' : ''}
            >
              <Heading1 />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive('heading', { level: 2 }) ? 'text-blue-500' : ''}
            >
              <Heading2 />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor.isActive('heading', { level: 3 }) ? 'text-blue-500' : ''}
            >
              <Heading3 />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'text-blue-500' : ''}
            >
              <Bold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'text-blue-500' : ''}
            >
              <Italic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'text-blue-500' : ''}
            >
              <Underline />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={editor.isActive('code') ? 'text-blue-500' : ''}
            >
              <Code />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'text-blue-500' : ''}
            >
              <List />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive('blockquote') ? 'text-blue-500' : ''}
            >
              <TextQuote />
            </button>
            <button
              onClick={() => editor.chain().focus()?.toggleHighlight().run()}
              className={editor.isActive('highlight') ? 'text-blue-500' : ''}
            >
              <Highlighter />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'text-blue-500' : ''}
            >
              <Strikethrough />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-500' : ''}
            >
              <AlignLeft />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-500' : ''}
            >
              <AlignCenter />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-500' : ''}
            >
              <AlignRight />
            </button>
            <button
              onClick={() => onAiClick()}
              className={'hover:text-blue-500'}
            >
              <Sparkles />
            </button>
            <button onClick={download}>
              <Download />
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default EditiorExtension;
