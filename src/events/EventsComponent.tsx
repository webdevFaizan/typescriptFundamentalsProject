const EventsComponent = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement> | undefined) => {
    console.log("Dragging has started");
    console.log(event?.clientX);
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement> | undefined) => {
    console.log("On Drag End");
    console.log(event?.clientX);
  };

  const onContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("mouseClickDisabled");
  };

  const onCopy = (event : React.ClipboardEvent<HTMLDivElement>) =>{
    console.log("copying started");
    event.preventDefault();
    alert('Cant copy');
  }

  return (
    <div>
      <input onChange={onChange} />
      <div
        draggable
        onCopy={onCopy}
        onContextMenu={onContextMenu}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        Try to copy me.
      </div>
    </div>
  );
};

export default EventsComponent;
