import { colors } from '../system/colors';

export const MsgConfigDebugCli = `USER: Command-Line configuration (Medium priority)`;
export const MsgConfigDebugEnv = `USER: Environment configuration (Low priority)`;
export const MsgConfigDebugFinal = `SYSTEM: Final user configuration that will be used...`;
export const MsgConfigDebugRc = `USER: .figmagicrc configuration (Highest priority)`;
export const MsgDownloadFileWritingFile = (path: string): string =>
  `${colors.FgYellow}\n* Writing file: ${path}`;
export const MsgGeneratedFileWarning = `THIS FILE IS AUTO-GENERATED BY FIGMAGIC. DO NOT MAKE EDITS IN THIS FILE! CHANGES WILL GET OVER-WRITTEN BY ANY FURTHER PROCESSING.`;
export const MsgGetTokenMatchNoMatch = `${colors.FgYellow}! No matching token! Hard-coding to expected value:`;
export const MsgJobComplete = `${colors.FgGreen}\nFigmagic completed operations successfully!`;
export const MsgProcessElementsCreatingElement = (elementName: string, fixedName: string): string =>
  `* ${elementName} > ${fixedName}`;
export const MsgSetDataFromApi = `${colors.FgYellow}\nAttempting to fetch data from Figma API...\n`;
export const MsgSetDataFromLocal = `${colors.FgYellow}\nAttempting to recompile data from local Figma JSON file...\n`;
export const MsgSyncElements = `${colors.FgYellow}\nAttempting to parse elements...\n`;
export const MsgSyncGraphics = `${colors.FgYellow}\nGetting images from Figma API...\n`;
export const MsgWriteBaseFile = `${colors.FgYellow}\nWriting Figma base file...\n`;
export const MsgWriteTokens = `${colors.FgYellow}\nWriting design tokens...\n`;
