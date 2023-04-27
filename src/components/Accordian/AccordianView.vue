<script>
import { reactive } from 'vue';
import { Collapse } from 'vue-collapsed';
import fakeData from './fakeJSON.json';

export default {
  name: 'AccordionView',
  components: { Collapse },
  setup() {
    const questions = reactive(
      fakeData.map(({ title, answer }, index) => ({
        title,
        answer,
        isExpanded: index === 2,
      }))
    );

    function handleAccordion(selectedIndex) {
      questions.forEach((_, index) => {
        questions[index].isExpanded =
          index === selectedIndex ? !questions[index].isExpanded : false;
      });
    }

    return {
      questions,
      handleAccordion,
    };
  },
};
</script>

<template>
  <article class="Wrapper py-12">
    <div
      v-for="(question, index) in questions"
      :key="question.title"
      class="Section bg-dgcon-500 my-4 rounded-lg md:text-xl text-left"
    >
      <button
        :class="[
          'Panel',
          {
            Active: question.isExpanded,
          },
        ]"
        @click="() => handleAccordion(index)"
      >
        {{ question.title }}
      </button>
      <Collapse as="section" :when="question.isExpanded" class="Collapse">
        <p class="bg-dgcon-400 text-dgbg-900 py-8 px-4 md:text-lg text-sm">
          {{ question.answer }}
        </p>
      </Collapse>
    </div>
  </article>
</template>

<style>
button{
  padding: 10px;
}
</style>