function spread(count) {
  const checkbox = document.getElementById(`folder-checkbox-${count}`);
  const icon = document.getElementById(`spread-icon-${count}`);

  if (!checkbox || !icon) return;

  checkbox.checked = !checkbox.checked;
  icon.innerHTML = icon.innerHTML === 'arrow_right' ? 'arrow_drop_down' : 'arrow_right';
}
