import RectWithText, { RectPropsType } from "./RectWithText"

export function RoomBox({
    x,
    y,
    width,
    height,
    label
}: RectPropsType) {
    return (
        <RectWithText x={x} y={y} width={width} height={height} label={label} color="#b3def8ff" />
    )
}

export function StairBox({
    x,
    y,
    width,
    height,
    label
}: RectPropsType) {
    return (
        <RectWithText x={x} y={y} width={width} height={height} label={label} color="#b3def8ff" />
    )
}

export function EmergencyExitBox({
    x,
    y,
    width,
    height,
    label
}: RectPropsType) {
    return (
        <RectWithText x={x} y={y} width={width} height={height} label={label} color="#b3def8ff" />
    )
}