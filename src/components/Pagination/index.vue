<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNoInfo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="StartNumAndEndNum.start != 1"
      @click="$emit('getPageNoInfo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="StartNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in StartNumAndEndNum.end"
      :key="index"
      v-if="page >= StartNumAndEndNum.start"
      @click="$emit('getPageNoInfo', page)"
      :class="{ active: pageNo == page }"
    >
      <span>{{ page }}</span>
    </button>
    <!-- <button
      v-if="pageNo < pageSize - 1 && StartNumAndEndNum.end < pageSize - 1"
    >
      ···
    </button> -->
    <button v-if="StartNumAndEndNum.end < pageSize - 1">···</button>
    <button
      v-if="StartNumAndEndNum.end != pageSize"
      @click="$emit('getPageNoInfo', pageSize)"
      :class="{ active: pageNo == pageSize }"
    >
      {{ pageSize }}
    </button>
    <!-- <button v-if="pageNo < pageSize - parseInt(continues / 2)">9</button> -->
    <button
      :disabled="pageNo == pageSize"
      @click="$emit('getPageNoInfo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ infoSize }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "continues", "infoSize"],
  computed: {
    StartNumAndEndNum() {
      const { pageNo, pageSize, continues } = this;
      let start = 0,
        end = 0;
      if (pageSize <= continues) {
        start = 1;
        end = pageSize;
      } else {
        if (pageNo <= parseInt(continues / 2)) {
          start = 1;
          end = continues;
        } else if (pageNo >= pageSize - 1) {
          start = pageSize - continues + 1;
          end = pageSize;
        } else {
          start = pageNo - parseInt(continues / 2);
          end = pageNo + parseInt(continues / 2);
          if (end > pageSize) {
            let cnt = end - pageSize;
            end = pageSize;
            start -= cnt;
          }
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
