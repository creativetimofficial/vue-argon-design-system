let componentList = [];
export default function (componentEntries) {
  let sideItems = [];
  const menus = {
    components: {
      title: 'Components',
      collapsable: true,
      children: []
    }
  };

  componentList.forEach(component => {
    menus.components.children.push(`/component-docs/${component}`)
  });

  for (let menu in menus) {
    if (menus[menu].children.length > 0) {
      sideItems.push(menus[menu]);
    }
  }

  return sideItems;
}
