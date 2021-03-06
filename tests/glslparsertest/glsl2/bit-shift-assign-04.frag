// [config]
// expect_result: pass
// glsl_version: 1.30
//
// [end config]

// Expected: PASS, glsl == 1.30
//
// Description: bit-shift-assign with argument type (uvecN, uvecN)
//
// From page 50 (page 56 of PDF) of the GLSL 1.30 spec:
// "the operands must be signed or unsigned integers or integer vectors. [...]
// In all cases, the resulting type will be the same type as the left
// operand."

#version 130
void main() {
    uvec2 v2 = uvec2(0, 1);
    v2 <<= v2;
    v2 >>= v2;

    uvec3 v3 = uvec3(0, 1, 2);
    v3 <<= v3;
    v3 >>= v3;

    uvec4 v4 = uvec4(0, 1, 2, 3);
    v4 <<= v4;
    v4 >>= v4;
}
