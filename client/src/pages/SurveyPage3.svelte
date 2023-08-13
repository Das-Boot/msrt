<!-- SURVEY Page 2 -->
<script>
  // IMPORTS
  // -------------------------------------------
  import { userStore, updateUser, questions } from "../utils.js";

  import { createEventDispatcher } from "svelte";
  // COMPONENT VARIABLES
  // -------------------------------------------
  console.log("questions", questions);

  let a9 = "";
  let a10 = "";
  let a11 = "";
  let a12 = "";

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
    $userStore.q9 = questions[8].questionText;
    $userStore.q10 = questions[9].questionText;
    $userStore.q11 = questions[10].questionText;
    $userStore.q12 = questions[11].questionText;

    // question category/domain
    $userStore.c9 = questions[8].category;
    $userStore.c10 = questions[9].category;
    $userStore.c11 = questions[10].category;
    $userStore.c12 = questions[11].category;

    // question type
    $userStore.t9 = questions[8].type;
    $userStore.t10 = questions[9].type;
    $userStore.t11 = questions[10].type;
    $userStore.t12 = questions[11].type;

    // answers to qs
    $userStore.a9 = a9;
    $userStore.a10 = a10;
    $userStore.a11 = a11;
    $userStore.a12 = a12;

    // check for any empty responses
    if (a9 == "" || a10 == "" || a11 == "" || a12 == "") {
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
        Pre-Chat Survey Page 3/3
      </p>
      <form name="survey" id="form">
        <!-- q1 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[8].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q9-input" type="text" bind:value={a9} />
            </p>
          </div>
        </div>
        <!-- q1 end -->
        <!-- q2 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[9].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q10-input" type="text" bind:value={a10} />
            </p>
          </div>
        </div>
        <!-- q2 end -->

        <!-- q3 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[10].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q11-input" type="text" bind:value={a11} />
            </p>
          </div>
        </div>
        <!-- q3 end -->

        <!-- q4 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[11].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q12-input" type="text" bind:value={a12} />
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
              on:click|preventDefault={submitPageOne}>Continue to Chat!</button
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
