import { useEffect, useMemo, useState } from "react";

export function useMouseOverZoom(
    source,
    target,
    cursor,
    radius = 25
) {
    const [mouse, setMouse] = useState({ x: 0, y: 0, isActive: false });

    // Capture Mouse position
    useEffect(() => {
        if (source.current) {
            const handleMouseMove = (e) => {
                const rect = source.current?.getBoundingClientRect();
                if (rect) {
                    setMouse({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                        isActive: true,
                    });
                }
            };
            const handleMouseOut = () => {
                setMouse({
                    x: 0,
                    y: 0,
                    isActive: false,
                });
            };
            source.current.addEventListener("mousemove", handleMouseMove);
            source.current.addEventListener("mouseout", handleMouseOut);
            return () => {
                source.current?.removeEventListener("mousemove", handleMouseMove);
                source.current?.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, [source]);

    // Compute the part of the image to zoom based on mouse position
    const zoomBounds = useMemo(() => {
        return {
            left: mouse.x - radius,
            top: mouse.y - radius,
            width: radius * 2,
            height: radius * 2,
        };
    }, [mouse.x, mouse.y, radius]);

    // move the cursor to the mouse position
    useEffect(() => {
        if (cursor.current) {
            const { left, top, width, height } = zoomBounds;
            cursor.current.style.left = `${left}px`;
            cursor.current.style.top = `${top}px`;
            cursor.current.style.width = `${width}px`;
            cursor.current.style.height = `${height}px`;
            cursor.current.style.display = mouse.isActive ? "block" : "none";
        }
    }, [zoomBounds, mouse.isActive]);

    // draw the zoomed image on the canvas
    useEffect(() => {
        if (source.current && target.current) {
            const ctx = target.current.getContext("2d");
            if (ctx) {
                if (mouse.isActive) {
                    const { left, top, width, height } = zoomBounds;
                    const imageRatio = source.current.naturalWidth / source.current.width;
                    ctx.drawImage(
                        source.current,
                        left * imageRatio,
                        top * imageRatio,
                        width * imageRatio,
                        height * imageRatio,
                        0,
                        0,
                        target.current.width,
                        target.current.height
                    );
                } else {
                    // clear canvas
                    ctx.clearRect(0, 0, target.current.width, target.current.height);
                }
            }
        }
    }, [zoomBounds, mouse.isActive]);

    // Position and style the target canvas
    useEffect(() => {
        if (target.current && source.current) {
            const sourceRect = source.current.getBoundingClientRect();
            target.current.style.display = "block";
        }
    }, [target, source, mouse.isActive]);

    return mouse.isActive;
}