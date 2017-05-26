/**
 * 比较版本号的大小
 *
 * 返回值:
 * v1大于v2则返回1，
 * v1小于v2则返回-1，
 * v1等于v2则返回0
 *
 * Example:
 * versionCompare('1.1', '1.2') => -1
 * versionCompare('1.1', '1.1') =>  0
 * versionCompare('1.2', '1.1') =>  1
 * versionCompare('2.23.3', '2.22.3') => 1
 * versionCompare(1.1, 1.2) => -1
 *
 * @param v1 版本号1
 * @param v2 版本号2
 * @returns {number}
 */
module.exports = function (v1, v2) {
    if(v1 == undefined || v2 == undefined) {
        throw new Error();
    }

    var v1_Array = String(v1).split('.'),
        v2_Array = String(v2).split('.'),
        len = Math.max(v1_Array.length, v2_Array.length);

    for(var i = 0; i < len; i++) {
        var _v1 =  parseInt(v1_Array[i]) || 0;
        var _v2 = parseInt(v2_Array[i]) || 0;
        if(_v1 < _v2) {
            return -1;
        } else if(_v1 > _v2) {
            return 1;
        }
    }

    return 0;
}