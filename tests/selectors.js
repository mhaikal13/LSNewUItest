/**
 * Stable Playwright selectors for Bayernwelle Live Studio UI
 * Grouped by functional area. Use these instead of fragile nth-child or textual matches.
 */

export const ButtonOK = () => {
  return `button:has-text("OK")`;
};

// ============================================================================
// Players & Meters (Player 1, 2, 3, hotkey1, hotkey2, Mic, Phone)
// ============================================================================

export const playerByRole = (playerName) => {
  // playerName: 'player1', 'player2', 'player3', 'hotkey1', 'hotkey2', 'SipRemoteAudio'
  return `[role="${playerName}"]`;
};

export const playerContainer = (playerNumber) => {
 //  playerNumber: 1, 2, 3
  return `[role="player${playerNumber}"]`;
};

export const timerInPlayer = (playerNumber) => {
  // Stable timer display (HH:MM.H format) scoped to a specific player
  return `[role="player${playerNumber}"] .timer_dtime`;
};

export const playerTitle = (playerNumber) => {
  // Player label/title (e.g., "Player 1", "hotkey 1", "Mic 1")
  return `[role="player${playerNumber}"] .meter-title`;
};

export const playerMuteButton = (playerNumber) => {
  return `[role="player${playerNumber}"] .mute`;
};

export const playerOffButton = (playerNumber) => {
  return `[role="player${playerNumber}"] .buttonFalse`;
};

export const playerPflButton = (playerNumber) => {
  return `#PFLplayer${playerNumber}`;
};

export const playerSyncButton = (playerNumber) => {
  return `[role="player${playerNumber}"] .syncBtn`;
};

export const playerTitleText = (playerNumber) => {
  // The actual title text element (e.g., "Player 1")
  return `[role="player${playerNumber}"] #title-text`;
};

export const playerElapsedTime = (playerNumber) => {
  // Elapsed time timer (first .timer_dtime)
  return `[role="player${playerNumber}"] .timer_dtime:nth-child(1)`;
};

export const playerRemainingTime = (playerNumber) => {
  // Remaining time timer (second .timer_dtime)
  return `[role="player${playerNumber}"] .timer_dtime:nth-child(2)`;
};

export const playerSongTitles = (playerNumber) => {
  // Container for song artist and title
  return `[role="player${playerNumber}"] .song-titles`;
};

export const playerMeterContainer = (playerNumber) => {
  // The meter visualization container
  return `[role="player${playerNumber}"] .meter-container`;
};

// ============================================================================
// Playlist & Content Items (info_box, draggable items)
// ============================================================================

export const playlistItemByIndex = (index) => {
  // Get all draggable playlist items (0-indexed)
  return `.info_box[draggable="true"]`;
};

export const playlistItemTitle = () => {
  // Title of a playlist item (use within a locator chain)
  return `.left-song p`;
};

export const playlistItemDetail = () => {
  // Detail text (artist, metadata) of a playlist item
  return `.left-songdetail p`;
};

export const playlistItemTimeRemaining = () => {
  // Remaining time (first timer in .left-header)
  return `.left-header p:nth-child(1)`;
};

export const playlistItemTimeElapsed = () => {
  // Elapsed time (second timer in .left-header)
  return `.left-header p:nth-child(2)`;
};

export const playlistItemPlayButton = () => {
  // Play/pause icon within an info_box
  return `.info_play svg`;
};

export const playlistItemLinkModeIcon = () => {
  // Link-mode indicator icon (active or inactive)
  return `img.link-mode`;
};

export const playlistItemColorBadge = () => {
  // Color circle/badge indicating content type
  return `.icon_circle`;
};

// ============================================================================
// Settings & Configuration
// ============================================================================

export const settingsButton = () => {
  // Gear icon to open settings
  return `.settings-button.setting-gear`;
};

export const settingsDialog = () => {
  // Settings dialog wrapper
  return `.setting-wrap`;
};

export const settingsDialogContent = () => {
  // Content inside settings dialog
  return `.setting-dlg`;
};

export const settingSelectByLabel = (labelText) => {
  // Generic select dropdown by visible label
  return `.setting-control:has-text("${labelText}") .setting-select`;
};

export const settingToggleSwitch = (labelText) => {
  // Toggle switch by associated label text (uses ARIA role)
  // Example: settingToggleSwitch('Disable Keyboard Shortcuts')
  return `input[role="switch"][aria-label="${labelText}"]`;
};

export const settingToggleSwitchByIndex = (index) => {
  // If label-based approach fails, use nth switch (0-indexed)
  return `input[role="switch"]`;
};

export const settingsSaveButton = () => {
  return `button:has-text("Save Settings")`;
};

export const settingsCloseButton = () => {
  return `[role="dialog"] button:has-text("×")`;
};

// ============================================================================
// Date Picker & Calendar
// ============================================================================

export const datePickerInput = () => {
  // Date input field (e.g., "Fri 30-01-2026 10")
  return `.react-datepicker__input-container input`;
};

export const datePickerPreviousButton = () => {
  // Left arrow to navigate previous date
  return `.react-datepicker__input-container + svg`; // First SVG after input
};

export const datePickerNextButton = () => {
  // Right arrow to navigate next date
  return `.react-datepicker__input-container ~ svg`; // Following SVG
};

// ============================================================================
// Header & Status Bar
// ============================================================================

export const headerClock = () => {
  // Time display in top-right (HH:MM:SS)
  return `.header_timer .time`;
};

export const headerDate = () => {
  // Date display in top-right (e.g., "Fri 30 Jan")
  return `.header_timer p:nth-child(2)`;
};

export const headerStatusOnline = () => {
  // Online status indicator (e.g., Broadcast, MIDI)
  return `.on-of-status .online`;
};

export const headerStatusOffline = () => {
  // Offline status indicator
  return `.on-of-status .offline`;
};

export const broadcastStatusBadge = () => {
  // "Broadcast" label or status
  return `.on-of-status:has-text("Broadcast")`;
};

// ============================================================================
// Chat / Messaging Area
// ============================================================================

export const chatContainer = () => {
  // Chat window wrapper
  return `.chat_container`;
};

export const chatMessageInput = () => {
  // Chat message textarea
  return `.chat_container textarea`;
};

export const chatSendButton = () => {
  // Send button (arrow icon)
  return `.chat_container button[type="button"]`;
};

export const chatToggleBandage = () => {
  // Chat expand/collapse toggle (bottom-left badge)
  return `.chat_bandage`;
};

export const chatMessagesList = () => {
  // Container for chat messages
  return `.chat_list`;
};

// ============================================================================
// Hotkey Panels
// ============================================================================

export const hotkey1Panel = () => {
  return `[role="hotkey1"]`;
};

export const hotkey2Panel = () => {
  return `[role="hotkey2"]`;
};

export const hotkeyItem = (panelRole, index) => {
  // panelRole: 'hotkey1' or 'hotkey2', index: 0-based
  return `[role="${panelRole}"] .KeyWrapper`;
};

// ============================================================================
// Main Containers & Root
// ============================================================================

export const mainRoot = () => {
  return `#root`;
};

export const mainHeader = () => {
  return `.header-section`;
};

export const mainBody = () => {
  return `.main-body`;
};

export const djWrap = () => {
  // DJ console area
  return `.dj-wrap`;
};

export const leftWrap = () => {
  // Left sidebar (playlist)
  return `.left`;
};

export const rightWrap = () => {
  // Right sidebar (meters/players)
  return `.right-wrap`;
};

// ============================================================================
// Waveform / Current Playing Display
// ============================================================================

export const waveformCurrent = () => {
  // Waveform display area for current playback
  return `#waveform_playercurrent`;
};

export const progressTimerContainer = () => {
  // Progress/timer bar inside playlist items
  return `.progress-timer-container`;
};

// ============================================================================
// Modal / Dialog (SweetAlert2, Settings, etc.)
// ============================================================================

export const dialogOverlay = () => {
  // Modal background overlay
  return `.swal2-container`;
};

export const dialogTitle = () => {
  // Modal title (SweetAlert2)
  return `.swal2-title`;
};

export const dialogConfirmButton = () => {
  // OK / Confirm button
  return `.swal2-confirm`;
};

export const dialogCancelButton = () => {
  // Cancel / Close button
  return `.swal2-cancel`;
};

// ============================================================================
// Helper: Build a locator with context
// ============================================================================

/**
 * Example usage in tests:
 *
 * const page = await browser.newPage();
 * await page.goto(BASE_URL);
 *
 * // Navigate to a specific player timer
 * const p1Timer = page.locator(timerInPlayer(1));
 * await expect(p1Timer).toBeVisible();
 *
 * // Get all playlist items and interact with the first one
 * const playlistItems = page.locator(playlistItemByIndex(0));
 * const firstItemTitle = playlistItems.locator(playlistItemTitle()).first();
 * const titleText = await firstItemTitle.textContent();
 *
 * // Access settings
 * await page.locator(settingsButton()).click();
 * await page.locator(settingsSaveButton()).click();
 *
 * // Poll timer until it changes (see BugReorder.spec.js for full pattern)
 * const timer = page.locator(timerInPlayer(1));
 * await expect.poll(async () => {
 *   return await timer.textContent();
 * }, { timeout: 5000 }).not.toBe('00:00.0');
 */

export default {
  // Players
  playerByRole,
  playerContainer,
  timerInPlayer,
  playerTitle,
  playerMuteButton,
  playerOffButton,
  playerPflButton,
  playerSyncButton,

  // Playlist
  playlistItemByIndex,
  playlistItemTitle,
  playlistItemDetail,
  playlistItemTimeRemaining,
  playlistItemTimeElapsed,
  playlistItemPlayButton,
  playlistItemLinkModeIcon,
  playlistItemColorBadge,

  // Settings
  settingsButton,
  settingsDialog,
  settingsDialogContent,
  settingSelectByLabel,
  settingToggleSwitch,
  settingToggleSwitchByIndex,
  settingsSaveButton,
  settingsCloseButton,

  // Date Picker
  datePickerInput,
  datePickerPreviousButton,
  datePickerNextButton,

  // Header
  headerClock,
  headerDate,
  headerStatusOnline,
  headerStatusOffline,
  broadcastStatusBadge,

  // Chat
  chatContainer,
  chatMessageInput,
  chatSendButton,
  chatToggleBandage,
  chatMessagesList,

  // Hotkeys
  hotkey1Panel,
  hotkey2Panel,
  hotkeyItem,

  // Main
  mainRoot,
  mainHeader,
  mainBody,
  djWrap,
  leftWrap,
  rightWrap,

  // Waveform
  waveformCurrent,
  progressTimerContainer,

  // Modal
  dialogOverlay,
  dialogTitle,
  dialogConfirmButton,
  dialogCancelButton,
};
