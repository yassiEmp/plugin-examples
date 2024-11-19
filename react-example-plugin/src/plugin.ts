import type { PluginMessageEvent } from './model';

penpot.ui.open('React example plugin', `?theme=${penpot.theme}`, { width: 400, height: 700 });

penpot.on('themechange', (theme) => {
  sendMessage({ type: 'theme', content: theme });
});

function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message);
}
