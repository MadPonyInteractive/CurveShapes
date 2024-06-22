---
layout: default
title: Panel: Curve Shape
parent: V.3.0.0
nav_order: 5
---

# Panel: Curve Shape
Curve Shape is the first panel. Here you can define winch curve object will control winch mesh object.

## When a mesh object is selected
The panel will display the curve object that is controlling the mesh object (if any). You can change the control curve object by selecting a different curve object from the dropdown list or by dragging and dropping the eyedropper icon on a curve object.

## When a curve object is selected
The panel will display the mesh object that is being controlled by the curve object (if any). You can change the mesh object by selecting a different mesh object from the dropdown list or by dragging and dropping the eyedropper icon on a mesh object.

*! Keep in mind that a controlled mesh object will be re-created when changing the control curve object.*

*** 

The `Edit Curve` button will take you to the curve object's edit mode.

The `Create Surface` button will create a brand new mesh object from the selected curve object.

When a mesh object is associated with a curve object, the `Create Surface` button will change to `Update Surface`. This button will update the mesh object with the latest changes made to the curve object.


## Edit Curve Mode
When the `Edit Curve` button is pressed, the curve object will be selected and the user will be taken to the curve object's edit mode.

In this mode, you will have one more button available: `Auto Update Mesh`. This button will enable the automatic update of the mesh object while editing splines. 

*! This feature is still experimental and will get laggy when using a lot of splines and geometry.*
