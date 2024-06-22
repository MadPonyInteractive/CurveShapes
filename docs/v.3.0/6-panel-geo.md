---
layout: default
title: Panel - Geometry
parent: V.3.0
nav_order: 6
---

# Panel: Curve Shape Geometry
This panel is where you can define the initial geometry of the mesh object.

![geo_panel](../assets/geo_panel.png)

```
In this initial release V.3.0, only surface geometry is available. 
Future versions will include more types of geometry as well as 
options to close generated geometry.
```


This panel is contextual, meaning it will give you different options depending on the amount of splines you have in your curve object.

## Edges Box
The edges box will present you with options to define the amount of edges the mesh object will have as well as how they will behave.


### 1 spline
![1_spline_ex](../assets/1_spline_ex.png)

In this scenario the edges box will have the following options:

![single_edge_box](../assets/single_edge_box.png)

- `Edges`: The amount of edges the mesh object will have.
- `Snap`: The edges will snap to the points in the splines.
- `Even`: The edges will be evenly distributed along the spline.
- Close Type: The type of geometry used to create the mesh.
    - `Open`: Only edges will be created.
    - `Ngon`: A single face will be created.
    - `Tris`: Triangles will be created to create the mesh object.
    - `Tri Fan`: A triangle fan will be created to create the mesh object.


### 2 splines

![2_spline](../assets/2_spline_ex.png)

In this scenario the edges box will have the following options:

![double_edge_box](../assets/double_edge_box.png)

- `Spline Edges`: The amount of edges each spline will have.
- `Snap`: The edges will snap to the points in the splines.
- `Even`: The edges will be evenly distributed along the spline.
- `Connection Edges`: The amount of edges that will connect the splines.

### 3 or more splines

![3_spline_ex](../assets/3_spline_ex.png)

In this scenario the edges box will have the following options:

![tripple_edge_box](../assets/tripple_edge_box.png)

- `Spline Edges`: The amount of edges each spline will have.
- `Snap`: The edges will snap to the points in the splines.
- `Even`: The edges will be evenly distributed along the spline.
- `Closed`: This will add an edge loop connecting the first and last spline.
- `Connect Closest`: By default the edges will connect the splines in order of spline creation. This option will connect the splines based on proximity.
- `Connection Edges`: The amount of edge loops between each spline edge connection.


## Interpolation Box
When using 3 or more splines, the interpolation box will be available. This box will allow you to define how the edges that connect the splines will be interpolated.

![interp_box](../assets/interp_box.png)

- `Regular`: This will change the interpolation algorithm, allowing for different results.
- `X | Y | Z`: This will allow you to block interpolation from happening in the selected axis.
- `Influence`: This controls the amount of interpolation applied. 

## Mesh Box

![mesh_box](../assets/mesh_box.png)

- `Smooth`: This will smooth the resulting mesh.
- `Flip Faces`: This will flip the faces of the mesh.

