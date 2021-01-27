export default `
<style>
  body {
    background-color: #ccc;
  }

  component {
    width: auto !important;
  }
</style>
<div class="app app--center">
  {{SLOT 'title' }}
  {{SLOT 'link' }}
  {{SLOT 'field' }}
  {{SLOT 'fieldValid' }}
  {{SLOT 'button' }}
  {{SLOT 'buttonPrimary' }}
  {{SLOT 'buttonDanger' }}
  {{SLOT 'buttonIconEmoji' }}
  {{SLOT 'avatar' }}
  {{SLOT 'avatarPhoto' }}
  {{SLOT 'avatarStatus' }}
</div>
`;
//# sourceMappingURL=template.js.map