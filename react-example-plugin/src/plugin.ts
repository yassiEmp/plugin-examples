import type { PluginMessageEvent } from './model';

penpot.ui.open('React example plugin', `?theme=${penpot.theme}`, { width: 400, height: 800 });

penpot.on('themechange', (theme) => {
  sendMessage({ type: 'theme', content: theme });
});

function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message);
}

penpot.ui.onMessage<{type: string, content: string}>((message) => {
  if (message.type === "create-text") {
    const text = penpot.createText(message.content || "Hello World!");
    if (text) {
      text.growType = "auto-width";
      text.textTransform = "uppercase";
      text.textDecoration = "underline";
      text.fontId = "gfont-work-sans";
      // Order matters! If you apply fontStyle or fontWeight before fontId it won't be applied because it'll change fontType and maybe doesn't have that option.
      // Also, keep in mind that not all fonts supports the same styles and weights. You might be setting an italic style to a font that, again, doesn't have that option.
      text.fontStyle = "italic";
      text.fontSize = "20";
      text.fontWeight = "500";

      // You can also apply different styles to specific text ranges if you need to.
      // This will select the "Hello" section from the text we created earlier.
      const textRange = text.getRange(0, 5);
      textRange.fontSize = "40";
      textRange.fills = [{ fillColor: '#ff6fe0', fillOpacity: 1 }];

      text.x = penpot.viewport.center.x;
      text.y = penpot.viewport.center.y;

      // set the selection to our just created text 
      penpot.selection = [text];
    }
  }
})