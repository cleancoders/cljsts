/**********************************************************************
 * Extern for src
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var jsts = {
    "algorithm": {
        "Angle": {
            "CLOCKWISE": {},
            "COUNTERCLOCKWISE": {},
            "NONE": {},
            "PI_OVER_2": {},
            "PI_OVER_4": {},
            "PI_TIMES_2": {}
        },
        "Area": function () {},
        "Centroid": function () {},
        "ConvexHull": {
            "RadialComparator": function () {},
            "getConvexHull": function () {}
        },
        "Distance": function () {},
        "InteriorPointArea": {
            "InteriorPointPolygon": {
                "DoubleComparator": function () {}
            },
            "ScanLineYOrdinateFinder": function () {}
        },
        "InteriorPointLine": function () {},
        "InteriorPointPoint": function () {},
        "Length": function () {},
        "MinimumBoundingCircle": function () {},
        "MinimumDiameter": function () {},
        "Orientation": {
            "CLOCKWISE": {},
            "COLLINEAR": {},
            "COUNTERCLOCKWISE": {},
            "LEFT": {},
            "RIGHT": {},
            "STRAIGHT": {},
            "isCCW": function() {}
        },
        "PointLocation": function () {},
        "PointLocator": function () {},
        "RobustLineIntersector": {
            "COLLINEAR": {},
            "COLLINEAR_INTERSECTION": {},
            "DONT_INTERSECT": {},
            "DO_INTERSECT": {},
            "NO_INTERSECTION": {},
            "POINT_INTERSECTION": {}
        },
        "distance": {
            "DiscreteHausdorffDistance": {
                "MaxDensifiedByFractionDistanceFilter": function () {},
                "MaxPointDistanceFilter": function () {}
            },
            "DistanceToPoint": function () {},
            "PointPairDistance": function () {}
        },
        "locate": {
            "IndexedPointInAreaLocator": {
                "IntervalIndexedGeometry": function () {},
                "SegmentVisitor": function () {}
            },
            "PointOnGeometryLocator": function () {},
            "SimplePointInAreaLocator": function () {}
        },
        "match": {
            "AreaSimilarityMeasure": function () {},
            "HausdorffSimilarityMeasure": {
                "DENSIFY_FRACTION": {}
            },
            "SimilarityMeasure": function () {},
            "SimilarityMeasureCombiner": function () {}
        }
    },
    "densify": {
        "Densifier": {
            "DensifyTransformer": function () {}
        }
    },
    "dissolve": {
        "LineDissolver": function () {}
    },
    "geom": {
        "Coordinate": {
            "DimensionalComparator": function () {},
            "M": {},
            "NULL_ORDINATE": {},
            "X": {},
            "Y": {},
            "Z": {},
            "equals3D": function() {}
        },
        "CoordinateList": {
            "coordArrayType": {}
        },
        "CoordinateSequenceFilter": function () {},
        "CoordinateXY": {
            "DimensionalComparator": function () {},
            "M": {},
            "NULL_ORDINATE": {},
            "X": {},
            "Y": {},
            "Z": {}
        },
        "CoordinateXYM": {
            "DimensionalComparator": function () {},
            "M": {},
            "NULL_ORDINATE": {},
            "X": {},
            "Y": {},
            "Z": {}
        },
        "CoordinateXYZM": {
            "DimensionalComparator": function () {},
            "M": {},
            "NULL_ORDINATE": {},
            "X": {},
            "Y": {},
            "Z": {}
        },
        "Dimension": {
            "A": {},
            "DONTCARE": {},
            "FALSE": {},
            "L": {},
            "P": {},
            "SYM_A": {},
            "SYM_DONTCARE": {},
            "SYM_FALSE": {},
            "SYM_L": {},
            "SYM_P": {},
            "SYM_TRUE": {},
            "TRUE": {}
        },
        "Envelope": function () {},
        "Geometry": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "constructor_": function () {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "GeometryCollection": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "GeometryFactory": function () {},
        "IntersectionMatrix": function () {},
        "LineSegment": function () {},
        "LineString": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "LinearRing": {
            "MINIMUM_VALID_SIZE": {},
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "Location": {
            "BOUNDARY": {},
            "EXTERIOR": {},
            "INTERIOR": {},
            "NONE": {}
        },
        "MultiLineString": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "MultiPoint": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "MultiPolygon": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "Point": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "Polygon": {
            "TYPECODE_GEOMETRYCOLLECTION": {},
            "TYPECODE_LINEARRING": {},
            "TYPECODE_LINESTRING": {},
            "TYPECODE_MULTILINESTRING": {},
            "TYPECODE_MULTIPOINT": {},
            "TYPECODE_MULTIPOLYGON": {},
            "TYPECODE_POINT": {},
            "TYPECODE_POLYGON": {},
            "TYPENAME_GEOMETRYCOLLECTION": {},
            "TYPENAME_LINEARRING": {},
            "TYPENAME_LINESTRING": {},
            "TYPENAME_MULTILINESTRING": {},
            "TYPENAME_MULTIPOINT": {},
            "TYPENAME_MULTIPOLYGON": {},
            "TYPENAME_POINT": {},
            "TYPENAME_POLYGON": {},
            "geometryChangedFilter": {
                "filter": function () {},
                "interfaces_": {}
            }
        },
        "PrecisionModel": {
            "FIXED": {
                "_name": {}
            },
            "FLOATING": {
                "_name": {}
            },
            "FLOATING_SINGLE": {
                "_name": {}
            },
            "Type": {
                "nameToTypeMap": {
                    "map": {}
                }
            },
            "maximumPreciseValue": {}
        },
        "Triangle": function () {},
        "util": {
            "AffineTransformation": function () {},
            "AffineTransformationBuilder": function () {},
            "AffineTransformationFactory": function () {},
            "ComponentCoordinateExtracter": function () {},
            "GeometryCollectionMapper": function () {},
            "GeometryCombiner": function () {},
            "GeometryEditor": {
                "CoordinateOperation": function () {},
                "CoordinateSequenceOperation": function () {},
                "GeometryEditorOperation": function () {},
                "NoOpGeometryOperation": function () {}
            },
            "GeometryExtracter": function () {},
            "GeometryMapper": {
                "MapOp": function () {}
            },
            "GeometryTransformer": function () {},
            "LineStringExtracter": function () {},
            "LinearComponentExtracter": function () {},
            "PointExtracter": function () {},
            "PolygonExtracter": function () {},
            "ShortCircuitedGeometryVisitor": function () {},
            "SineStarFactory": {
                "Dimensions": function () {}
            }
        }
    },
    "geomgraph": {
        "GeometryGraph": function () {}
    },
    "index": {
        "kdtree": {
            "KdTree": {
                "BestMatchVisitor": function () {}
            }
        },
        "quadtree": {
            "Quadtree": function () {}
        },
        "strtree": {
            "STRtree": {
                "DEFAULT_NODE_CAPACITY": {},
                "IntersectsOp": function () {},
                "STRtreeNode": function () {},
                "intersectsOp": {},
                "xComparator": {},
                "yComparator": {}
            }
        }
    },
    "io": {
        "GeoJSONReader": function () {},
        "GeoJSONWriter": function () {},
        "OL3Parser": function () {},
        "WKTReader": function () {},
        "WKTWriter": function () {}
    },
    "linearref": {
        "LengthIndexedLine": function () {},
        "LengthLocationMap": function () {},
        "LinearGeometryBuilder": function () {},
        "LinearIterator": function () {},
        "LinearLocation": function () {},
        "LocationIndexedLine": function () {}
    },
    "noding": {
        "MCIndexNoder": {
            "SegmentOverlapAction": function () {}
        },
        "ScaledNoder": function () {},
        "SegmentString": function () {}
    },
    "operation": {
        "BoundaryOp": function () {},
        "IsSimpleOp": {
            "EndpointInfo": function () {}
        },
        "buffer": {
            "BufferOp": {
                "CAP_BUTT": {},
                "CAP_FLAT": {},
                "CAP_ROUND": {},
                "CAP_SQUARE": {},
                "MAX_PRECISION_DIGITS": {}
            },
            "BufferParameters": {
                "CAP_FLAT": {},
                "CAP_ROUND": {},
                "CAP_SQUARE": {},
                "DEFAULT_MITRE_LIMIT": {},
                "DEFAULT_QUADRANT_SEGMENTS": {},
                "DEFAULT_SIMPLIFY_FACTOR": {},
                "JOIN_BEVEL": {},
                "JOIN_MITRE": {},
                "JOIN_ROUND": {}
            }
        },
        "distance": {
            "DistanceOp": function () {}
        },
        "linemerge": {
            "LineMerger": function () {},
            "LineSequencer": function () {}
        },
        "overlay": {
            "OverlayOp": {
                "DIFFERENCE": {},
                "INTERSECTION": {},
                "SYMDIFFERENCE": {},
                "UNION": {}
            },
            "snap": {
                "GeometrySnapper": {
                    "SNAP_PRECISION_FACTOR": {}
                },
                "LineStringSnapper": function () {}
            }
        },
        "polygonize": {
            "Polygonizer": {
                "LineStringAdder": function () {}
            }
        },
        "relate": {
            "RelateOp": function () {}
        },
        "union": {
            "UnaryUnionOp": function () {}
        },
        "valid": {
            "ConsistentAreaTester": function () {},
            "IsValidOp": function () {}
        }
    },
    "precision": {
        "CommonBits": function () {},
        "CommonBitsOp": function () {},
        "CommonBitsRemover": {
            "CommonCoordinateFilter": function () {},
            "Translater": function () {}
        },
        "EnhancedPrecisionOp": function () {},
        "GeometryPrecisionReducer": function () {},
        "MinimumClearance": {
            "MinClearanceDistance": function () {}
        },
        "SimpleMinimumClearance": {
            "ComputeMCCoordinateSequenceFilter": function () {},
            "VertexCoordinateFilter": function () {}
        }
    },
    "simplify": {
        "DouglasPeuckerSimplifier": {
            "DPTransformer": function () {}
        },
        "TopologyPreservingSimplifier": {
            "LineStringMapBuilderFilter": function () {},
            "LineStringTransformer": function () {}
        },
        "VWSimplifier": {
            "VWTransformer": function () {}
        }
    },
    "triangulate": {
        "ConformingDelaunayTriangulationBuilder": function () {},
        "DelaunayTriangulationBuilder": function () {},
        "VoronoiDiagramBuilder": function () {},
        "quadedge": {
            "Vertex": {
                "BEHIND": {},
                "BETWEEN": {},
                "BEYOND": {},
                "DESTINATION": {},
                "LEFT": {},
                "ORIGIN": {},
                "RIGHT": {}
            }
        }
    },
    "util": {
        "CollectionUtil": {
            "Function": function () {}
        },
        "CoordinateArrayFilter": function () {},
        "CoordinateCountFilter": function () {},
        "GeometricShapeFactory": {
            "Dimensions": function () {}
        },
        "NumberUtil": function () {},
        "ObjectCounter": {
            "Counter": function () {}
        },
        "PriorityQueue": function () {},
        "StringUtil": {
            "NEWLINE": {}
        },
        "UniqueCoordinateArrayFilter": function () {}
    },
    "version": {}
};
jsts.geom.Geometry.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getBoundary": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getInteriorPoint": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isEmpty": function () {},
    "isSimple": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.GeometryCollection.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getInteriorPoint": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isSimple": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.LineString.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getInteriorPoint": function () {},
    "getLength": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isSimple": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.LinearRing.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getInteriorPoint": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isSimple": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.MultiLineString.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getGeometryN": function () {},
    "getInteriorPoint": function () {},
    "getNumGeometries": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isSimple": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.MultiPoint.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getInteriorPoint": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isSimple": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.MultiPolygon.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getGeometryN": function () {},
    "getInteriorPoint": function () {},
    "getNumGeometries": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isSimple": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.Point.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "convexHull": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getInteriorPoint": function () {},
    "getX": function () {},
    "getY": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.Polygon.prototype = {
    "buffer": function () {},
    "contains": function () {},
    "coveredBy": function () {},
    "covers": function () {},
    "createPointFromInternalCoord": function () {},
    "crosses": function () {},
    "difference": function () {},
    "disjoint": function () {},
    "distance": function () {},
    "equals": function () {},
    "equalsTopo": function () {},
    "getCentroid": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getExteriorRing": function () {},
    "getInteriorPoint": function () {},
    "getInteriorRingN": function () {},
    "getNumInteriorRing": function () {},
    "intersection": function () {},
    "intersects": function () {},
    "isSimple": function () {},
    "isValid": function () {},
    "isWithinDistance": function () {},
    "overlaps": function () {},
    "relate": function () {},
    "symDifference": function () {},
    "toString": function () {},
    "toText": function () {},
    "touches": function () {},
    "union": function () {},
    "within": function () {}
};
jsts.geom.GeometryFactory.prototype = {
    "createLineString": function () {},
    "createLinearRing": function () {},
    "createMultiLineString": function () {},
    "createMultiPoint": function () {},
    "createMultiPolygon": function () {},
    "createPoint": function () {},
    "createPolygon": function () {}
};
jsts.geom.LineSegment.prototype = {
    "p0": {},
    "p1": {},
    "distance": function () {},
    "getCoordinate": function () {},
    "getCoordinates": function () {},
    "getLength": function () {},
    "intersection": function () {},
    "midPoint": function () {},
    "orientationIndex": function () {},
    "toGeometry": function () {}
};
/**********************************************************************
 * End Generated Extern for src
 /**********************************************************************/
