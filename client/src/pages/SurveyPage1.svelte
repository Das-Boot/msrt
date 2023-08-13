<!-- SURVEY Page 1 -->
<script>
  // IMPORTS
  // -------------------------------------------
  import { userStore, updateUser, questions } from "../utils.js";

  import { createEventDispatcher } from "svelte";
  // COMPONENT VARIABLES
  // -------------------------------------------
  console.log("questions", questions);

  let a1 = "";
  let a2 = "";
  let a3 = "";
  let a4 = "";

  const dispatch = createEventDispatcher();

  // COMPONENT LOGIC
  // -------------------------------------------
  // Write the debrief form data to firebase and then notify App.svelte we're ready to submit to mturk. We don't do the submission here for 2 reasons that cause a race condition:
  // 1) Submitting an external form is analgous to navigating away from the current URL which means that no further component logic (e.g. writing to firebase) can occur after the form is submitted. This make it impossible to write to firebase that the user has completed the HIT so they can't participate again in the future.
  // 2) Updating the user status in firebase changes the app state instantly because we want to prevent repeat participation. But that means this component gets destroyed and thus the form DOM element gets destroyed and we can't submit anything. The DOM element must exist in some form to make submission possible.
  // The race condition is basically: if we submit first, we can't update firebase to prevent repeat participantion; if we update firebase we lose the form and can't submit
  // Solution: Write the debrief data to firebase, but don't update the app state or submit anything to mturk. Instead dispatch a notification to App.svelte which will handle it in submitHIT(). See that function for more details.
  const submitPageOne = async () => {
    // question text
    $userStore.q1 = questions[0].questionText;
    $userStore.q2 = questions[1].questionText;
    $userStore.q3 = questions[2].questionText;
    $userStore.q4 = questions[3].questionText;

    // question category/domain
    $userStore.c1 = questions[0].category;
    $userStore.c2 = questions[1].category;
    $userStore.c3 = questions[2].category;
    $userStore.c4 = questions[3].category;

    // question type
    $userStore.t1 = questions[0].type;
    $userStore.t2 = questions[1].type;
    $userStore.t3 = questions[2].type;
    $userStore.t4 = questions[3].type;

    // answers to qs
    $userStore.a1 = a1;
    $userStore.a2 = a2;
    $userStore.a3 = a3;
    $userStore.a4 = a4;

    // check for any empty responses
    if (a1 == "" || a2 == "" || a3 == "" || a4 == "") {
      alert("Please answer all questions before continuing.");
      return;
    } else {
      await updateUser($userStore);
      dispatch("finished");
    }
  };
</script>

<div class="container">
  <div class="columns is-centered">
    <div class="column is-three-quarters">
      <p class="title is-3 has-text-centered is-spaced">
        Pre-Chat Survey Page 1/3
      </p>
      <form name="survey" id="form">
        <!-- q1 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[0].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q1-input" type="text" bind:value={a1} />
            </p>
          </div>
        </div>
        <!-- q1 end -->
        <!-- q2 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[1].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q2-input" type="text" bind:value={a2} />
            </p>
          </div>
        </div>
        <!-- q2 end -->

        <!-- q3 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[2].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q3-input" type="text" bind:value={a3} />
            </p>
          </div>
        </div>
        <!-- q3 end -->

        <!-- q4 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[3].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q3-input" type="text" bind:value={a3} />
            </p>
          </div>
        </div>
        <!-- q4 end -->
      </form>
      <br />
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button
              class="button is-success is-large"
              on:click|preventDefault={submitPageOne}
              >Continue to 2nd page of questionnaire</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .age-input {
    width: 3rem;
  }
  .lang-input {
    width: 20rem;
  }
  .textarea-feedback {
    min-width: 80%;
    max-width: 80%;
  }
</style>
