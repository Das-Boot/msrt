<!-- SURVEY Page 2 -->
<script>
  // IMPORTS
  // -------------------------------------------
  import { userStore, updateUser, questions } from "../utils.js";

  import { createEventDispatcher } from "svelte";
  // COMPONENT VARIABLES
  // -------------------------------------------
  console.log("questions", questions);

  let a5 = "";
  let a6 = "";
  let a7 = "";
  let a8 = "";

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
    $userStore.q5 = questions[4].questionText;
    $userStore.q6 = questions[5].questionText;
    $userStore.q7 = questions[6].questionText;
    $userStore.q8 = questions[7].questionText;

    // question category/domain
    $userStore.c5 = questions[4].category;
    $userStore.c6 = questions[5].category;
    $userStore.c7 = questions[6].category;
    $userStore.c8 = questions[7].category;

    // question type
    $userStore.t5 = questions[4].type;
    $userStore.t6 = questions[5].type;
    $userStore.t7 = questions[6].type;
    $userStore.t8 = questions[7].type;

    // answers to qs
    $userStore.a5 = a5;
    $userStore.a6 = a6;
    $userStore.a7 = a7;
    $userStore.a8 = a8;

    // check for any empty responses
    if (a5 == "" || a6 == "" || a7 == "" || a8 == "") {
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
        Pre-Chat Survey Page 2/3
      </p>
      <form name="survey" id="form">
        <!-- q1 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[4].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q5-input" type="text" bind:value={a5} />
            </p>
          </div>
        </div>
        <!-- q1 end -->
        <!-- q2 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[5].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q6-input" type="text" bind:value={a6} />
            </p>
          </div>
        </div>
        <!-- q2 end -->

        <!-- q3 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[6].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q7-input" type="text" bind:value={a7} />
            </p>
          </div>
        </div>
        <!-- q3 end -->

        <!-- q4 start -->
        <div class="field is-normal has-text-centered" />
        <div class="field-label is-normal has-text-centered">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label has-text-centered"
            >{questions[7].questionText}</label
          >
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input q8-input" type="text" bind:value={a8} />
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
              >Continue to Last page of questionnaire</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
